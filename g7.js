$(document).ready(function () {
    var layerSet = 0,
        layersPerSet = 3;
    $.each(project.layers, function (k, layer, o) {
        layer.setVisible(Math.floor(k/layersPerSet) === parseInt(0))
    });
    $('[name=layer]').on('change', function () {
            project.layers[layersPerSet * layerSet + parseInt(this.value)].setVisible(this.checked);
    });
    $('[name=switch_layer_set]').on('change', function () {
        var $self = this;
        $.each(project.layers, function (k, layer, o) {
            layer.setVisible(Math.floor(k/layersPerSet) === parseInt($self.value))
        });
    })
});
