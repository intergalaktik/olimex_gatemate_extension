$(document).ready(function(){if(ccoStrResources.IsCartView==="true"){try{AddCCOPopup()}catch(a){}}else{AddOrderProjectEvent()}});function hidePopUp(){tb_remove()}function SubmitButtonClicked(){if(document.getElementById("ctl00_ContentMain_hidMouseReelRequest")!=null&&document.getElementById("ctl00_ContentMain_hidMouseReelRequest").value=="False"){if((typeof $("input[id$=radMouseReel]")!="undefined"&&$("input[id$=radMouseReel]").is(":checked"))||(typeof $("input[id$=radFullNMouseReel]")!="undefined"&&$("input[id$=radFullNMouseReel]").is(":checked"))){return true
}else{hidePopUp();return false}}else{if((typeof $("input[id$=radCutTape]")!="undefined"&&$("input[id$=radCutTape]").is(":checked"))||(typeof $("input[id$=radFullNMouseReel]")!="undefined"&&$("input[id$=radFullNCutTape]").is(":checked"))){return true}else{hidePopUp();return false}}}function OpenMouserReelPopUP(b,c,d,a){if(document.getElementById("ctl00_ContentMain_hidProductID")!=null){document.getElementById("ctl00_ContentMain_hidProductID").value=b}if(document.getElementById("ctl00_ContentMain_hidMouseReelRequest")!=null){document.getElementById("ctl00_ContentMain_hidMouseReelRequest").value=a
}if(a=="False"){SelectRadioButton(d,c)}else{SelectRadioButtonWithMouseReel(d,c)}tb_show("MouseReel","#TB_inline?height=480&width=633&inlineId=divMousReel&modal=false","")}function SelectRadioButtonWithMouseReel(b,a){if(typeof $("input[id$=radMouseReel]")!="undefined"){$("input[id$=radStandarReel]").attr("disabled",true)}if(parseInt(a)<parseInt(b)){if(typeof $("input[id$=radCutTape]")!="undefined"){$("input[id$=radCutTape]").removeAttr("disabled")}if(typeof $("input[id$=radMouseReel]")!="undefined"){$("input[id$=radMouseReel]").removeAttr("disabled")
}if(typeof $("input[id$=radMouseReel]")!="undefined"){$("input[id$=radMouseReel]").prop("checked",true)}if(typeof $("input[id$=radStandarReel]")!="undefined"){$("input[id$=radStandarReel]").attr("disabled",true)}if(typeof $("input[id$=radFullNCutTape]")!="undefined"){$("input[id$=radFullNCutTape]").attr("disabled",true)}if(typeof $("input[id$=radFullNMouseReel]")!="undefined"){$("input[id$=radFullNMouseReel]").attr("disabled",true)}}else{if(typeof $("input[id$=radCutTape]")!="undefined"){$("input[id$=radCutTape]").attr("disabled",true)
}if(typeof $("input[id$=radMouseReel]")!="undefined"){$("input[id$=radMouseReel]").attr("disabled",true)}if(typeof $("input[id$=radStandarReel]")!="undefined"){$("input[id$=radStandarReel]").attr("disabled",true)}if(typeof $("input[id$=radFullNCutTape]")!="undefined"){$("input[id$=radFullNCutTape]").removeAttr("disabled")}if(typeof $("input[id$=radFullNMouseReel]")!="undefined"){$("input[id$=radFullNMouseReel]").removeAttr("disabled")}if(typeof $("input[id$=radFullNMouseReel]")!="undefined"){$("input[id$=radFullNMouseReel]").prop("checked",true)
}}}function SelectRadioButton(b,a){if(a==b){if(typeof $("input[id$=radCutTape]")!="undefined"){$("input[id$=radCutTape]").attr("disabled",true)}if(typeof $("input[id$=radMouseReel]")!="undefined"){$("input[id$=radMouseReel]").attr("disabled",true)}if(typeof $("input[id$=radStandarReel]")!="undefined"){$("input[id$=radStandarReel]").removeAttr("disabled")}if(typeof $("input[id$=radStandarReel]")!="undefined"){$("input[id$=radStandarReel]").prop("checked",true)}if(typeof $("input[id$=radFullNCutTape]")!="undefined"){$("input[id$=radFullNCutTape]").attr("disabled",true)
}if(typeof $("input[id$=radFullNMouseReel]")!="undefined"){$("input[id$=radFullNMouseReel]").attr("disabled",true)}}else{if(parseInt(a)<parseInt(b)){if(typeof $("input[id$=radCutTape]")!="undefined"){$("input[id$=radCutTape]").removeAttr("disabled")}if(typeof $("input[id$=radCutTape]")!="undefined"){$("input[id$=radCutTape]").prop("checked",true)}if(typeof $("input[id$=radMouseReel]")!="undefined"){$("input[id$=radMouseReel]").removeAttr("disabled")}if(typeof $("input[id$=radStandarReel]")!="undefined"){$("input[id$=radStandarReel]").attr("disabled",true)
}if(typeof $("input[id$=radFullNCutTape]")!="undefined"){$("input[id$=radFullNCutTape]").attr("disabled",true)}if(typeof $("input[id$=radFullNMouseReel]")!="undefined"){$("input[id$=radFullNMouseReel]").attr("disabled",true)}}else{if(typeof $("input[id$=radCutTape]")!="undefined"){$("input[id$=radCutTape]").attr("disabled",true)}if(typeof $("input[id$=radMouseReel]")!="undefined"){$("input[id$=radMouseReel]").attr("disabled",true)}if(typeof $("input[id$=radStandarReel]")!="undefined"){$("input[id$=radStandarReel]").attr("disabled",true)
}if(typeof $("input[id$=radFullNCutTape]")!="undefined"){$("input[id$=radFullNCutTape]").removeAttr("disabled")}if(typeof $("input[id$=radFullNCutTape]")!="undefined"){$("input[id$=radFullNCutTape]").prop("checked",true)}if(typeof $("input[id$=radFullNMouseReel]")!="undefined"){$("input[id$=radFullNMouseReel]").removeAttr("disabled")}}}}function GetMouserPartNumber(){return $.trim($("div[id$=divMouserPartNum]").text())}function GetOrderQuantity(){return $("[id$=OrderQty]").val()}function ExportToExcel(){AddPmGoogleAnalyticsEvents("Export","Detail")
}function PrintDetailPage(){AddPmGoogleAnalyticsEvents("Print","Detail");window.print();return false}function GetOrderMultiplier(){var a=$("input[id$=txtQuantityTop]").val();var b=$("input[id$=txtQuantity]").val();a=isNaN(a)?1:parseInt(a);b=isNaN(b)?1:parseInt(b);return a>b?a:b}function AddOrderProjectEvent(){$("input.btn-Checkout").click(function(){var a=GetOrderMultiplier();GaEvent("Project Manager Order","Project Order","Merge with Cart",a);return true})}function OrderCartMergeEvent(){var a=GetOrderMultiplier();
GaEvent("Project Manager Order","Saved Cart Order","Merge with Cart",a);return true}function OrderCartMakeActiveEvent(){var a=GetOrderMultiplier();GaEvent("Project Manager Order","Saved Cart Order","Make Active",a);return true}function AddCCOPopup(){$("input.btn-Checkout").click(function(){CCOPopup();return false})}function CCOPopup(){var a=$('<div id="ccoModal">'+$("#divCcoDialog").html()+"</div>");a.dialog({title:ccoStrResources.ChooseCartOption,closeOnEscape:false,resizable:false,modal:true,width:440,maxHeight:550,appendTo:"form#aspnetForm"})
};