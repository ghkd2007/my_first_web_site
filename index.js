var Links={
    setColor:function(color){
        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i<alist.length){
            alist[i].style.color = color;
            i += 1;
        }
    }
};
var Body = {
    setColor:function(color){
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor:function(color){
        document.querySelector('body').style.backgroundColor = color;
    }
}
function nightdayhandler(self){
    if(self.value==='night'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';
        Links.setColor('powderblue');
    }
    else{
        Body.setColor('black');
        Body.setBackgroundColor('white');
        self.value = 'night';
        Links.setColor('blue')
    }
}
