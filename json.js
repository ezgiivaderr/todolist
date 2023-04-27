
// Create a "close" button and append it to each list item //var olan her li'ye çarpı işareti ekleme
const ul_Child = document.querySelector("#userList").children;      //ul içindeki elementleri değişkene atadık

for (let i = 0; i < ul_Child.length; i++) {          //her bir li içine icon'u eklemek için for döngüsü kullandık
let span_element = document.createElement("SPAN");  //çarpı işaretinin kapladığı elementi oluşturduk
span_element.className = "close";                   //css de tanımlı close class'ı atadık (position için)
span_element.innerHTML=` <i class="bi bi-x" style="float:right ;"></i>` //bootstrap'ten iconu span'e ekledik
ul_Child[i].appendChild(span_element);            //oluşturulan span'i her bir li elementin içine ekledik
}


// Click on a close button to hide the current list item // var olan li'deki çarpı icona tıklayınca satırı silme
//querySelectorAll birden fazla class'a sahip element varsa (or getElementsByClassName) ya da p, li gibi elementleri seçmek için kullanılır 
const remove = document.querySelectorAll(".close"); //buraki close değişkeni ile aslında for içinde tanımladığımız span_element içindeki spanleri çekmek istiyoruz fakat for döngüsünde tanımladığımız için local bir değişken olup döngü dışına çıkıldığında değişken kullanılamayacağından span_element yerine onun clasına sahip(close) yeni bir değişken yaratıp onu kullanıyoruz

for (let i = 0; i < remove.length; i++) {   //her bir close içindeki listeyi döngüden getiriyoruz
    remove[i].addEventListener('click', close); // her bir close[index] 'e click eventi ekler.(her bir  li içindeki çarpı iconuna click event ekler)
    function close() {      //click event ile çağırılan fonksiyonun işlevini tanımladık
    const parent = remove[i].parentElement;    //close[index]'in parentElement'ini değişkene atadık(yani içinde bulunduğu element =>çarpı iconu li elementin içinde )
    parent.style.display = "none";       //icona atadığımız click eventi ile icona tıkladığımızda oluşan işlem içinde bulunduğu elementi sil or kapat işlemidir(yani tıklanan iconunu bulunduğu li elementini sildi)
  }
}


// Create a new list item when clicking on the "Add" button  //add butona tıklanadığında diğer liste özelliklerine sahip yeni li create
const array=[] //local storage için oluşrutuldu(girilen inputları arraye kaydetmek için)
function newElement(event) {
  event.preventDefault()

  //input değeri girme ve ul 'ye li olarak ekleme
    let liDOM=document.createElement('li')
    let inputDOM= document.querySelector("#task");
    // var t = document.createTextNode(inputValue);
    // li.appendChild(t);
    let inputValue=inputDOM.value.trim()  
    
    if (inputValue.length==0) {
      $('#liveToast').toast('show');
  
  } else { 
      
      liDOM.innerHTML=`${inputValue}`
      list.appendChild(liDOM)
      
      $('#liveToast1').toast('show');
  
      //yeni oluşturulan li'lere çarpı icon ekleme
      let span_element= document.createElement("SPAN");
      var iconx = document.createTextNode("\u00D7");  //createTextNode html içine metin yaratmak için kullanılır."\u00D7" de çarpı işaretinin unicode'dur
      //yani burada çarpı işaretinin unicode'unu text olarak alıp değişkene atadık
      span_element.className = "close";               
      span_element.appendChild(iconx)
      liDOM.appendChild(span_element);
  
      array.push(inputValue) //girilen input verilerini array'e pushladık
      localStorage.setItem('todo',JSON.stringify(array)) //local storage ile girilen her inputu arraye kaydettik
      localStorage.getItem('todo')  //girdiğin değer kadar sayı gösterir
      inputDOM.value=" "; // butona girilen input'u temizlemek
      
      
 }

   //yeni oluşturulan li'deki çarpı işaretine basınca satır silme
   const remove = document.querySelectorAll(".close");
   for (let i = 0; i < remove.length; i++) {  //yeni eklenen li'leri silmek için ayrıca buraya da ekledik
         remove[i].onclick = function() {
         this.parentElement.style.display="none";}
   }
    
}


// Add a "checked" symbol when clicking on a list item 
//var olan ve yeni oluşturulan li'ye tıklayınca check icon oluşturma ve text üzerini çizme 

const list = document.querySelector("#userList")
list.addEventListener('click',function(event){   //ul'ye click event ekledik
  if (event.target.tagName === 'LI') {          //click event'i ul içindeki Lİ lerde oluşursa
    event.target.classList.toggle('checked');   //click eventin gerçekleştiği Lİ ye toggle ile 'checked' classı ekleme
                                              //toggle() kullanımı:classlist ile kullanılır atanan clası görünür yapar,görünür olanı gizler
   }                                           
}, false);

