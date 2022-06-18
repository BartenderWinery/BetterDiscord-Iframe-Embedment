/**
 * @name Iframes
 * @author Bartender
 * @updateUrl 
 * @authorLink 
 * @source 
 */
class Iframes {

    getSettingsPanel(){return "<!--Enter Settings Panel Options, just standard HTML-->"}
    start(){
		setInterval(function(){
			try{ //send request to url to callback boolean
				if(document.getElementsByClassName("grid-1aWVsE"))
				var list=document.getElementsByClassName("grid-1aWVsE")
				for(var i=0;i<list.length;i++){
					if(list[i].children[0].tagName!='IFRAME'&&!list[i].parentElement.parentElement.parentElement.children[0].children[2].children[0].text.includes("https://discord")){
						list[i].style="padding:0px";list[i].innerHTML="<iframe style=\"height:100%;width:100%\" src=\""+list[i].parentElement.parentElement.parentElement.children[0].children[2].children[0].text+"\"></iframe>"}}}catch(e){}},500)}
    stop(){}
}