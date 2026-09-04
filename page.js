"use client";
import { useState } from 'react';

// ============= OWNER SETTINGS =============
const OWNER_INFO = {
  businessName: "Maha Enterprises",
  whatsapp: "923139223086",
  phone: "+92 313 9223086",
  email: "sb8739666@gmail.com",
  address: "Karachi, Pakistan"
}

const BANK_INFO = {
  bankName: "MCB BANK LIMITED",
  accountNumber: "1381 0831 9100 2027",
  accountTitle: "Maha Enterprises", // یہاں اپنا نام لکھ دیں اگر کوئی اور ہے
  easypaisa: "0346-8889167",
  jazzcash: "0314-1813274"
}

const PRODUCTS = [
  {
    id: 1,
    name: "J. Junaid Jamshed Premium - Tropical 23",
    price: 3499,
    image: "/products/j1.jpg", // آپ کی پہلی تصویر
    desc: "Men's Unstitched Watches clothes and Fabric. Premium Quality Tropical 23."
  },
  {
    id: 2, 
    name: "MUSHQ Unstitched - Eid Collection",
    price: 4999,
    image: "/products/j2.jpg", // آپ کی دوسری تصویر
    desc: "3-Piece 90/70 Lawn. Double Head Embroidery Shirt + Cotton Net Embroidered Dupatta."
  },
  {
    id: 3,
    name: "MARIA.B Unstitched - Summer Collection", 
    price: 5499,
    image: "/products/j3.jpg", // آپ کی تیسری تصویر
    desc: "3-Piece 90/70 Lawn. Double Head Embroidery + Bamber Chiffon Embroidered Dupatta."
  },
]
// ============= OWNER SETTINGS END =============

export default function Home() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} کارٹ میں ایڈ ہو گیا ✅`);
  }
  
  const cartTotal = cart.reduce((total, item) => total + item.price, 0);
  const whatsappMessage = `Assalamualaikum ${OWNER_INFO.businessName}\n\nI want to place an order:\n${cart.map(p => `- ${p.name} | Rs ${p.price}`).join('\n')}\n\n*Total: Rs ${cartTotal}*\n\nName: \nAddress: \nPhone: `;

  return (
    <main style={{fontFamily: 'Arial, sans-serif', background: '#f8fafc', color: '#333'}}>
      
      {/* Navbar */}
      <div style={{background: '#1e293b', color: 'white', padding: '15px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100}}>
        <h2 style={{margin: 0}}>{OWNER_INFO.businessName}</h2>
        <div style={{background: '#2563eb', color: 'white', padding: '10px 20px', borderRadius: '8px', fontWeight: 'bold'}}>
          🛒 Cart: {cart.length} | Rs {cartTotal}
        </div>
      </div>

      {/* Hero */}
      <div id="home" style={{textAlign: 'center', padding: '100px 20px', background: 'linear-gradient(to right, #2563eb, #1e293b)', color: 'white'}}>
        <h1 style={{fontSize: '52px', margin: '0'}}>Premium Unstitched Collection</h1>
        <p style={{fontSize: '20px'}}>J. | MUSHQ | MARIA.B | 100% Original</p>
        <a href="#products" style={{background: 'white', color: '#2563eb', padding: '15px 35px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold'}}>Shop Now</a>
      </div>

      {/* Products */}
      <div id="products" style={{padding: '80px 20px'}}>
        <h2 style={{textAlign: 'center', fontSize: '40px', marginBottom: '50px'}}>ہماری کلیکشن</h2>
        <div style={{display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', maxWidth: '1300px', margin: 'auto'}}>
          
          {PRODUCTS.map((product) => (
            <div key={product.id} style={{border: '1px solid #e2e8f0', borderRadius: '15px', width: '350px', background: 'white', boxShadow: '0 10px 20px rgba(0,0,0,0.08)'}}>
              <img src={product.image} alt={product.name} style={{width: '100%', height: '400px', objectFit: 'cover', borderTopLeftRadius: '15px', borderTopRightRadius: '15px'}} />
              <div style={{padding: '25px'}}>
                <h3 style={{margin: '0 0 10px 0'}}>{product.name}</h3>
                <p style={{color: '#666', minHeight: '60px'}}>{product.desc}</p>
                <p style={{fontSize: '28px', fontWeight: 'bold', color: '#dc2626', margin: '15px 0'}}>Rs {product.price}</p>
                <button onClick={() => addToCart(product)} style={{background: '#2563eb', color: 'white', padding: '14px', borderRadius: '10px', border: 'none', width: '100%', fontSize: '16px', cursor: 'pointer', fontWeight: 'bold'}}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Payment Section */}
      <div style={{padding: '60px 20px', background: 'white'}}>
        <div style={{maxWidth: '700px', margin: 'auto'}}>
          <h2 style={{textAlign: 'center', fontSize: '36px'}}>💳 Payment Methods</h2>
          <div style={{background: '#f1f5f9', padding: '25px', borderRadius: '12px', marginTop: '20px'}}>
            <p><b>1. Bank Transfer - MCB</b></p>
            <p>Bank: {BANK_INFO.bankName}</p>
            <p>Account Title: {BANK_INFO.accountTitle}</p>
            <p>Account No: <b>{}</b></p>
            <hr style={{margin: '15px 0'}} />
            <p><b>2. EasyPaisa:</b> {BANK_INFO.easypaisa}</p>
            <p><b>3. JazzCash:</b> {BANK_INFO.jazzcash}</p>
            <p style={{marginTop: '15px', color: '#dc2626'}}><b> پ  پر بھیج دیں  :نوٹ  whatsapp یمنٹ کے بعد رسید:</b> </p>
          </div>
        </div>
      </div>

      {/* WhatsApp Order Button */}
      {cart.length > 0 && (
        <div style={{textAlign: 'center', padding: '40px', position: 'sticky', bottom: 0, background: 'white', boxShadow: '0 -4px 10px rgba(0,0,0,0.1)'}}>
          <a href={`https://wa.me/${OWNER_INFO.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`} 
             style={{background: '#25D366', color: 'white', padding: '20px 40px', borderRadius: '10px', textDecoration: 'none', fontSize: '20px', fontWeight: 'bold'}}>
             ✅ WhatsApp پر مکمل آرڈر بھیجیں
          </a>
        </div>
      )}

      {/* Footer */}
      <div style={{background: '#1e293b', color: 'white', padding: '40px', textAlign: 'center'}}>
        <p>📞 {OWNER_INFO.phone} | 📧 {OWNER_INFO.email}</p>
        <p>© 2026 {OWNER_INFO.businessName}. All Rights Reserved.</p>
      </div>
    </main>
  )
}