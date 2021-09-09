const refs = {
    parent: document.getElementById('parent'),
        child: document.getElementById('child'),
    innerChild: document.getElementById('inner-child'),
}

const { parent, child, innerChild } = refs
console.log(parent);

parent.addEventListener('click', onParentClick);
child.addEventListener('click', onChildClick);
innerChild.addEventListener('click', onInnerChildClick);

function onParentClick(e) {
    console.log('onParentClick => e.target', e.target);
    console.log('onParentClick => e.currentTarget', e.currentTarget);
}

// e.parent - самый вложенный элемен, клик по нему обозначается target, целевой элемент
//  currentTarget - то, на чем висит прослушиыватель....ссылка на тот элемент на котором висит елемент клика

function onChildClick(e) {
    console.log('onChildClick => e.target', e.target);
    console.log('onChildClick => e.currentTarget', e.currentTarget);
}

function onInnerChildClick(e) {
    console.log('onInnerChildClick => e.target', e.target);
    console.log('onInnerChildClick => e.currentTarget', e.currentTarget);
}
