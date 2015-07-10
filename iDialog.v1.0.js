/******************************
**
** Author   : Arvinmeng
** Date     : 2015/07/08
** Version  : 1.0
**
*******************************/
/*
Example:

ErrorDialog.show({
    title   : "xxx",
    message : "Hello World!",
    buttonWord : "close",
    buttonFunction : function(){alert("click")}
})
*/
var ErrorDialog = {
    _conf:{
        title : "错误提示",
        message : "操作错误！",
        buttonWord : "关闭",
        buttonFunction : function(){
            $('.error-dialog-mask').fadeOut(100);
            $('.error-dialog').slideUp(200);
        }
    },
    css:'<style type="text/css">.error-dialog {z-index: 9999;position: fixed;top: 50%;left: 50%;width: 400px;height: 220px;margin: -100px 0 0 -200px;border-radius: 5px;border: solid 2px #666;background-color: #fff;display: none;box-shadow: 0 0 10px #666;}.error-up {border-bottom: 1px solid #ddd;position: relative;height: 45px;line-height: 45px;text-align: center;background-color: #46a3dc;color: white;font-size: 16px;}.error-up .close {float: right;color: #999;padding: 5px;margin: -2px -5px -5px;font: bold 14px/14px simsun;text-shadow: 0 1px 0 #ddd;text-decoration: none;cursor: pointer;}.error-title{margin: 0px;}.error-down {line-height:normal;color: #444;height: 148px;padding: 40px 60px 40px;font-size: 22px;text-align: center;}.error-dialog-mask {z-index: 9998;position: fixed;top: 0;left: 0;width: 100%;height: 100%;background: #000;opacity: 0.4;filter: alpha(opacity=40);display: none;}.alert-button{background-color: #46a3dc;color: white;width: 145px;height: 35px;line-height: 35px;margin: 30px auto 0;border-radius: 3px;font-size: 18px;cursor: pointer;}</style>',
    struct:[
        '<div class="error-dialog">',
            '<div class="error-up">',
                '<a href="javascript:;" title="关闭" class="close" style="display:none;">×</a>',
                '<div class="error-title">错误提示</div>',
            '</div>',
            '<div class="error-down">',
                '<div id="alert-message">操作错误！</div>',
                '<div id="alert-button" class="alert-button">关闭</div>',
            '</div>',
        '</div>',
        '<div class="error-dialog-mask"></div>'].join(''),
    close:function(){
        $('.error-dialog-mask').fadeOut(100);
        $('.error-dialog').slideUp(200);
    },
    init:function(){
        $(this.css).appendTo('body');
        $(this.struct).appendTo('body');
        $('.error-up .close').click(function(){
            ErrorDialog.close();
        });
    },
    show:function(conf){
        var title = typeof(conf.title) == "undefined"?this._conf.title:conf.title;
        var message = typeof(conf.message) == "undefined"?this._conf.message:conf.message;
        var buttonWord = typeof(conf.buttonWord) == "undefined"?this._conf.buttonWord:conf.buttonWord;
        var buttonFunction = typeof(conf.buttonFunction) == "undefined"?this._conf.buttonFunction:conf.buttonFunction;

        $('.error-title').html(title);
        $('#alert-message').html(message);
        $('#alert-button').html(buttonWord);
        $('#alert-button').unbind("click");
        $('#alert-button').bind("click",buttonFunction);
        $('.error-dialog-mask').fadeIn(100);
        $('.error-dialog').slideDown(200);
    }
}
jQuery(document).ready(function($) {
    ErrorDialog.init();
})