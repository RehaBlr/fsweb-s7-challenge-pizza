import React from "react";

function Header() {
  return (
    <div className="header">
      <h2>Position Absolute Acı Pizza</h2>
      <div className="fiyat">
        <div>
          <p>
            <b>85,50 ₺</b>
          </p>
        </div>
        <div className="oy-puan">
          <p>4.9</p>
          <p>(200)</p>
        </div>
      </div>
      <div className="aciklama">
        <p>
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.
        </p>
      </div>
    </div>
  );
}

export default Header;
