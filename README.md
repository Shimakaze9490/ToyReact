let node = <div id='tiger' class='myDiv' >
    <span>name</span>
    <span>age</span>
</div>;

var node = 
createElement("div", {
  id: "tiger",
  "class": "myDiv"
}, 
  createElement("span", null, "name"), 
  createElement("span", null, "age")
); 
