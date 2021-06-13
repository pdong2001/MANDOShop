function ProductBlock(imgLink, name, size, price, amount, color) {
    this.imgLink = imgLink;
    this.name = name;
    this.size = size;
    this.price = price;
    this.amount = Number(amount);
    this.color = color;
    this.getInfo = {
        imgLink: this.imgLink,
        name: this.name,
        size: this.size,
        price: this.price,
        amount: this.amount,
        color: this.color
    }
    this.toElement = function() {
        var temp = $('.c-product.temp').clone(true);
        temp.removeClass('temp');
        temp.find('img').attr('src', this.imgLink);
        temp.find('.info').html(this.color + '/' + this.size);
        temp.find('h3').html(this.name);
        temp.find('.count').html(this.amount);
        temp.find('.price').html(this.price);
        return temp;
    }
}
var listProductBlock = [];
refreshList();

function addToCart(e) {
    var elem = $(e.currentTarget);
    var parent = elem.parent().parent();
    var img = parent.find("img:first-child").attr('src');
    var name = parent.find("h3").html();
    var color = parent.find('.color input:checked+label div').html();
    var size = parent.find('.size input:checked+label').html();
    var amount = parent.find('.quantity input').val();
    var price = parent.find('.price-block .discount-price').html();
    var check = true;
    for (let index = 0; index < listProductBlock.length; index++) {
        if (listProductBlock[index].color == color &&
            listProductBlock[index].name == name &&
            listProductBlock[index].size == size) {
            listProductBlock[index].amount += Number(amount);
            check = false;
        }
    }
    if (check) {
        listProductBlock.push(
            new ProductBlock(img, name, size, price, amount, color).getInfo
        )
    }
    localStorage.removeItem('mandocart');
    localStorage.setItem('mandocart', JSON.stringify(listProductBlock));
    refreshCart(listProductBlock);
}

function moneyFormat(val) {
    var strVal = String(val).replaceAll('.', '');
    for (var index = strVal.length - 3; index > 0; index -= 3) {
        strVal = [strVal.slice(0, index), '.', strVal.slice(index)].join('');
    }
    return strVal;
}

function numberFormat(val) {
    var rs = val.replaceAll('.', '').replaceAll(',', '');
    while (rs.match(/\W+/i) != null) {
        rs = rs.replaceAll(rs.match(/\W+/i)[0], '');
    }
    return Number(rs);
}

function refreshCart(list, container = '#cartbox .ctn') {
    $('.search button:last-child span').html('0');
    $(container).empty();
    var total = 0;
    var count = 0;
    for (let index = 0; index < list.length; index++) {
        var obj = new ProductBlock(list[index].imgLink, list[index].name, list[index].size, list[index].price, list[index].amount, list[index].color)
        const element = obj.toElement();
        $(container).append(element);
        count += 1;
        total += Number(obj.amount) * numberFormat(list[index].price);
    }
    $('.search button:last-child span').html(count);
    $('.bill .total span.number').html(moneyFormat(total));
}

$(document).ready(function() {
    refreshCart(listProductBlock);
    $('.c-product button').click(function() {
        var parent = $(this).parent().parent().get(0);
        listProductBlock.splice($(parent).parent().index(parent), 1);
        localStorage.removeItem('mandocart');
        localStorage.setItem('mandocart', JSON.stringify(listProductBlock));
        refreshCart(listProductBlock);
    });
    $('#btnAdd').click(function(e) {
        if ($('.size input:checked').length == 0 ||
            $('.color input:checked').length == 0) {
            alert('Chọn size và màu sắc để đặt hàng.');
        } else {
            addToCart(e);
        }

    });
});

function refreshList() {
    listProductBlock = JSON.parse(localStorage.getItem('mandocart')) == null ? [] : JSON.parse(localStorage.getItem('mandocart'));
}

setInterval(function() {
    var localData = localStorage.getItem('mandocart');
    if (JSON.stringify(listProductBlock) != localData) {
        refreshList();
        refreshCart(listProductBlock);
        payCart();
    }
}, 1000);

function payCart() {
    refreshCart(listProductBlock, '#main .right .container');
    $('.bill .row:first-child .number').html($('.bill .total span.number').html());
}