scenarios = {
    0: {
        0:true,
        1:false,
        2:true,
        3:false,
        4:false,
        5:true
    },
    1: {
        0:true,
        1:false,
        2:true,
        3:true,
        4:true,
        5:false
    }
};
layersInScenario = {
    0: {
        0:0,
        1:2,
        2:5,
        3:false
    },
    1: {
        0:0,
        1:2,
        2:3,
        3:4
    }
};
$(document).ready(function () {
    var layerSet = 0,
        layersPerSet = 3;
    $.each(project.layers, function (k, layer, o) {
        layer.setVisible(scenarios[layerSet][k])
    });
    $('[name=layer]').on('change', function () {
        if (layersInScenario[layerSet][this.value]) {
            project.layers[layersInScenario[layerSet][this.value]].setVisible(this.checked);
        }
    });
    $('[name=switch_layer_set]').on('change', function () {
        var $self = this;
        $.each(project.layers, function (k, layer, o) {
            layer.setVisible(scenarios[$self.value][k])
        });
    })
});
