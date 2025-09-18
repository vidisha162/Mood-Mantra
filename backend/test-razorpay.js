import fs from "fs";
import csv from "csv-parser";
import Razorpay from "razorpay";

let razorpayInstance;

fs.createReadStream("razorpay_keys.csv")
  .pipe(csv())
  .on("data", (row) => {
    razorpayInstance = new Razorpay({
      key_id: row.key_id,
      key_secret: row.key_secret,
    });
    console.log("🔑 Loaded key_id:", row.key_id);
  })
  .on("end", async () => {
    console.log("✅ Razorpay instance created from CSV");

    // Optional: test creating an order
    try {
      const order = await razorpayInstance.orders.create({
        amount: 100,
        currency: "INR",
        receipt: "test_receipt_1",
      });
      console.log("✅ Test order created:", order);
    } catch (error) {
      console.error("❌ Razorpay test order failed:", error);
    }
  });
