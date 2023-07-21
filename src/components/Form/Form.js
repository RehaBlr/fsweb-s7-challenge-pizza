import React, { useState, useEffect } from "react";
import * as Yup from "yup";

import "./Form.css";
import { Link, useHistory } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";

const malzemeler = [
  { name: "Pepperroni" },
  { name: "Domates" },
  { name: "Biber" },
  { name: "Sosis" },
  { name: "Mısır" },
  { name: "Sucuk" },
  { name: "Kanada Jambonu" },
  { name: "Pastırma" },
  { name: "Ananas" },
  { name: "Tavuk Izgara" },
  { name: "Jalepeno" },
  { name: "Kabak" },
  { name: "Soğan" },
  { name: "Sarımsak" },
];
const sema = Yup.object().shape({
  adres: Yup.string()
    .required("İsim ve adres gerekli.")
    .min(3, "İsim en az 3 karakter olmalı."),
});

const Form = () => {
  const [ekMalzeme, setEkMalzeme] = useState([]);
  const [tane, setTane] = useState(1);
  const [bSecim, setBSecim] = useState(85.5);
  const [errors, setErrors] = useState({
    adres: "",
  });
  const history = useHistory();
  const [hamur, setHamur] = useState("kalin");

  const handleHistory = () => {
    history.push("/Order");
  };
  const [isFormValid, setFormValid] = useState(false);
  // const [siparisToplami, setSiparisToplami] = useState(0);
  const [formData, setFormData] = useState({
    sizeDropdown: "small",
    ekMalzemeler: [],
    adres: "",
    siparisNotu: "",
    kacTane: 1,
    fiyat: 85.5,
  });

  //Malzemelerin 10 dan fazla seçilmesi engellendi ve ekMalzeme seçilenler eklendi.
  function handleChange(event) {
    let ekM = [];

    const { value } = event.target;
    console.log(event.target);
    if (ekMalzeme.includes(value)) {
      // malzeme çıkar
      ekM = ekMalzeme.filter((malzeme) => malzeme !== value);
    } else {
      // malzeme ekle

      ekM = [...ekMalzeme, value];
    }
    if (ekM.length < 11) {
      setEkMalzeme(ekM);
      setFormData({ ...formData, ["ekMalzemeler"]: ekM });
      console.log(formData);
    } else {
      console.log("istenilen sınıra ulaşıldı");
      console.log(ekM);
    }
  }

  //kaç tane pizza söyleyeceğinin azaltıldığı yer 1 den az olamaz.
  function azalt() {
    if (tane > 1) {
      const counter = tane - 1;
      setTane(counter);
      setFormData({ ...formData, ["kacTane"]: tane });
    }
  }

  //kaç tane pizza söyleyeceğinin artırıldığı yer.
  function arttir() {
    const counter = tane + 1;
    setTane(counter);
    setFormData({ ...formData, ["kacTane"]: counter });
  }

  //ek malzeme seçimine göre fiyatta değişikliğin yapıldığı yer.
  function secimler() {
    let secimToplam = Number(ekMalzeme.length);
    return tane * secimToplam * 5;
  }

  //toplam fiyatın hesaplandığı yer.
  function toplamFiyat() {
    return bSecim * tane + secimler();
  }

  //boyut seçimine göre fiyatların güncellendiği yer.
  function boyutSecim(e) {
    // console.log(e.target.value);
    if (e.target.value === "medium") {
      setBSecim(135.5);
      // setFormData({ ...formData, [e.target.name]: e.target.value });
    } else if (e.target.value === "large") {
      setBSecim(185.5);
    } else {
      setBSecim(85.5);
    }
    // console.log(formData);
  }
  // function bak(e) {
  //   console.log(e.target);
  // }
  function handleChanged(e) {
    if (e.target.id === "size-dropdown") {
      boyutSecim(e);
      setFormData({ ...formData, [e.target.name]: e.target.value });
      setFormData({ ...formData, ["fiyat"]: toplamFiyat() });
    } else if (e.target.id === "name-input") {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      handleYup(e);
      // console.log(e.target.value);
    } else if (e.target.id === "special-text") {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      // console.log(e.target.value);
    } else {
      handleChange(e);
      setFormData({ ...formData, ["fiyat"]: toplamFiyat() });
    }
  }
  useEffect(() => {
    sema.isValid(formData).then((valid) => {
      setFormValid(valid);
    });
  }, [formData.adres]);

  function handleYup(e) {
    Yup.reach(sema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
    // console.log("hata alındı ");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleHamur(event) {
    // console.log(event, event.target.value);
    setHamur(event.target.value);
  }
  return (
    <div className="container-form">
      <div className="banner-home">
        <img src="/Assets/logo.svg" />
      </div>
      <Navbar />

      <div className="form-body">
        <Header />
        <div className="form">
          <form id="pizza-form">
            <div className="boyut-hamur">
              <div data-cy="drp-boyut">
                <h2>
                  Boyut Seç <span>*</span>
                </h2>
                <select
                  id="size-dropdown"
                  name="sizeDropdown"
                  // onChange={boyutSecim}
                  onChange={handleChanged}
                >
                  <option disabled>--Boyut Seç--</option>
                  <option value="small">Küçük 85,50 ₺</option>
                  <option value="medium">Orta 135,50 ₺</option>
                  <option value="large">Büyük 185,50 ₺</option>
                </select>
              </div>
              <div data-cy="radio-btn">
                <h2>
                  Hamur Seç <span>*</span>
                </h2>
                <label>
                  <input
                    type="radio"
                    value="ince"
                    checked={hamur === "ince"}
                    name="favDrink"
                    onChange={handleHamur}
                  />
                  İnce
                </label>

                <label>
                  <input
                    type="radio"
                    value="kalin"
                    checked={hamur === "kalin"}
                    name="hamur"
                    onChange={handleHamur}
                  />
                  Kalın
                </label>
              </div>
            </div>

            <div className="malzeme-h3">
              <h3>Ek malzemeler</h3>
              <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
            </div>
            <div></div>
            <div data-cy="malzeme" className="malzeme">
              {malzemeler.map((item, index) => (
                <div key={index}>
                  <label>
                    <input
                      id={index}
                      type="checkbox"
                      name={item.name}
                      value={item.name}
                      onChange={handleChanged}
                      checked={ekMalzeme.includes(item.name)}
                    />
                    {item.name}
                  </label>
                </div>
              ))}
            </div>
            <div className="name-in">
              <label htmlFor="name-input">
                <a className="note">
                  İsim Soyisim Adres <span>*</span>
                </a>
                <input
                  data-cy="name-text"
                  placeholder="Lütfen İsim,Soyisim,Adres bilgilerini giriniz !"
                  type="text"
                  id="name-input"
                  name="adres"
                  className="isim-input"
                  value={formData.adres}
                  onChange={handleChanged}
                />
              </label>
              <span className="form-error">{errors.adres}</span>
            </div>

            <div className="note">Sipariş Notu</div>
            <input
              data-cy="siparis-notu"
              placeholder="Siparişinize eklemek istediğin bir not var mı?"
              type="text"
              id="special-text"
              name="siparisNotu"
              className="isim-input "
              value={formData.siparisNotu}
              onChange={handleChanged}
            />
            {/* <textarea
              id="special-text"
              // rows="2"
              name="orderNote"
              className="order-note"
              placeholder="Siparişinize eklemek istediğin bir not var mı?"
            ></textarea> */}
            <br />

            <div className="footer-toplam">
              <div className="sol">
                <div className=" soltaraf">
                  <div>
                    <div onClick={azalt} className="btn-form">
                      -
                    </div>
                  </div>
                  <div className="miktar">
                    <label>{tane}</label>
                  </div>
                  <div>
                    <div onClick={arttir} className="btn-form">
                      +
                    </div>
                  </div>
                </div>
              </div>
              <div className="sag-tamamı">
                <div className="sag-taraf">
                  <div className="sipa">
                    <p>sipariş toplamı</p>
                  </div>
                  <div className="seci">
                    <p>seçimler : </p> <p>{secimler()} ₺</p>
                  </div>

                  <div className="seci toplam-color">
                    <p>Toplam :</p>
                    <p>{toplamFiyat()}₺</p>
                  </div>
                </div>
                {/* <Link to="/Order" id="order-button"> */}
                {/* <button className="btn-siparis">Sipari Ver</button> */}
                <button
                  data-cy="submit-btn"
                  type="submit"
                  disabled={!isFormValid}
                  onClick={handleHistory}
                >
                  SİPARİŞ VER
                </button>
                {/* </Link> */}
              </div>
            </div>
          </form>
        </div>
        {/* form sayfası hazırlanıyor */}
      </div>
    </div>
  );
};
export default Form;
