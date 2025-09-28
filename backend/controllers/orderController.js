
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// placing user order for frontend
const placeOrder = async (req, res) => {
  const frontend_url = "https://urbanfeast-frontend.onrender.com";

  try {
    // Create order in DB
    const newOrder = new orderModel({
      userId: req.user.id, // ✅ from authMiddleware
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });

    await newOrder.save();

    // clear cart after order placed
    await userModel.findByIdAndUpdate(req.user.id, { cartData: {} });

    // Stripe line items
    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price*100, // ✅ Stripe expects paise (INR * 100)
      },
      quantity: item.quantity || 1,
    }));

    // Add delivery charges 
    line_items.push({
      price_data: {
        currency: "usd",
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: 2*100, // example ₹20
      },
      quantity: 1,
    });

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: "payment",
      success_url: `${frontend_url}/myorders?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/cart?success=false&orderId=${newOrder._id}`,
    });

    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.error("Stripe error:", error.message);
    res.json({ success: false, message: "Error creating Stripe session" });
  }
};

const verifyOrder = async(req,res) =>{
    const {orderId,success} = req.body;
    try {
        if(success=="true"){
            await orderModel.findByIdAndUpdate(orderId,{payment:true});
            res.json({success:true,message:"Paid"})
        }else{
            await orderModel.findByIdAndDelete(orderId);
            res.json({success:false,message:"Not Paid"})
        }
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
    }
}

// user order for frontend

const userOrders = async (req,res) => {
  try {
    const orders = await orderModel.find({userId:req.body.userId});
    res.json({success:true,data:orders})
  } catch (error) {
    console.log(error)
    res.json({success:false,message:"Error"})
  }
}


// Listing orders for admin

const listOrders = async (req,res) => {
  try {
    const orders = await orderModel.find({});
    res.json({success:true,data:orders})
  } catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
    
  }
 }


// api for updating order status

const updateStatus = async (req,res) => {
  try {
    await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status});
    res.json({success:true,message:"Status Updated"})
  } catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
  }
}

export { placeOrder,verifyOrder,userOrders,listOrders,updateStatus }
