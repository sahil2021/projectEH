window.onload = (event) => {
    
    var editor = ace.edit("editor");
    var id_editor = document.getElementById("editor");
    var iframe = document.getElementById("renderhtml");
    var first = false;

    function init(){
        editor.setTheme("ace/theme/monokai");
        editor.session.setMode("ace/mode/html");
        editor.setShowPrintMargin(false);
        editor.setOptions({
            readOnly: false,
            wrap: true
        })
        id_editor.style.width = "50%";
        id_editor.style.top = "8%";
        editor.resize()

    }

    init()

    editor.getSession().on("change", function change(delta){
        var text_Data = editor.getValue()
        if(first == false){
            editor.setValue(html_beautify(text_Data))
            first = true;
        }
        
        iframe.setAttribute("srcdoc",text_Data)
    });

};