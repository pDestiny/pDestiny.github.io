function spread(count){
    document.getElementById('folder-checkbox-' + count).checked = !document.getElementById('folder-checkbox-' + count).checked
    document.getElementById('spread-icon-' + count).innerHTML = document.getElementById('spread-icon-' + count).innerHTML == 'arrow_right' ? 'arrow_drop_down' : 'arrow_right'
}

window.onload = function(ev){
    var checkboxes = document.querySelectorAll('input[id^="folder-checkbox"]')
    checkboxes.forEach(function(elem){
        elem.checked = true

        var count = elem.id.split('-').at(-1)
        var icon = document.getElementById('spread-icon-' + count)
        icon.click()
    })

}