import React from 'react'

const Location = () => {
  return (
     <div className="w-full h-[400px]">
      <iframe
        title="Shop Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.2068691603745!2d124.23265150228453!3d7.197392483051096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3256398cf97623d5%3A0xaf4103351bc2fc84!2sCotabato%20City%20Hall!5e1!3m2!1sen!2sph!4v1760100114012!5m2!1sen!2sph"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default Location