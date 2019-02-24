function ModTab($ct){
    this.init($ct)
    this.bind()
}
ModTab.prototype = {
    init: function($ct){
        this.titles = $ct.find('.title li')
        this.contents = $ct.find('.content div')

    },
    bind: function(){
        var _this = this
        this.titles.on('click',function(){
            $(this).addClass('active')
                   .siblings().removeClass('active')
            var index = $(this).index()
            console.log(index)
            _this.contents.removeClass('active')
                          .eq(index).addClass('active')
        })

    }
}
var modTab1 = new ModTab($('.mod-tab').eq(0))
var modTab2 = new ModTab($('.mod-tab').eq(1))