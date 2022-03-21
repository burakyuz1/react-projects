* Alt component üst komponente bir veri göndermek istediği zaman,
eventin tetiklendiğine dair bilgi ve eventArgs'larını yollar.
* Üst component bu bilgiye ne yapacağına karar verir.

* Temprature Convert örneğinde, alt component olan TempratureInput.js
üst component olan Calculator.js'e onTempratureChange eventini ve e.target.value yollar.

* Calculator.js bu bilgiyi handle ederek, state değişimini BURADA yapar. Alt component kesinlikle state değişimi yapmaz. Bilgiyi props'uyla birlikte üst sınıfa geçer. (event&event args yardımıyla)

* NOT: eventHandler içinde this parametresiyle useState kullanamayız. Çünkü this parametresi event içinde eventi tetikleyene işaret eder. Bu yüzden ctor içinde bunları bind'lamak gerekmektedir.

* NOT: class componentte setState kullanamayız. dolasayla ctor içinde this.state PROPERTY'sinin içine object geçerek state yönetimini burada yaparız.