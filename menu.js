const menuItems = ["Кто мы", "Как мы помогаем", "Показатели", "Истории", "Благотворители", "Контакты"]
let container = document.getElementsByClassName("menuLinks");

menuItems.map(item => {
      let list = document.createElement("li")
      let link = document.createElement("a")
      link.innerHTML = item
      list.appendChild(link)
      container[0].appendChild(list);
})
