//var categoryData = new kendo.data.DataSource(
//        {
//            transport: {
//                read: {
//                    url: "http://ws.healio.com/optometryapp/json/2/category/link/e5f1c476-3ac0-4ed2-9670-7b8c0c4e4613",
//                    data: {
//                        Accept: "application/json"
//                    }
//                }
//            }
//        });

//var subcategoryData = new kendo.data.DataSource(
//        {
//            transport: {
//                read: {
//                    url: "http://ws.healio.com/optometryapp/json/2/subcategory/link/cat1/e5f1c476-3ac0-4ed2-9670-7b8c0c4e4613",
//                    data: {
//                        Accept: "application/json"
//                    }
//                }
//            }
//        });

//var productData = new kendo.data.DataSource(
//        {
//            transport: {
//                read: {
//                    url: "http://ws.healio.com/optometryapp/json/2/product/link/subcata/e5f1c476-3ac0-4ed2-9670-7b8c0c4e4613",
//                    data: {
//                        Accept: "application/json"
//                    }
//                }
//            }
//        });

//var contactusTemplate = kendo.template($("#contactusTemplate").html());
//var contactusData = new kendo.data.DataSource(
//{
//    transport: {
//        read: {
//            url: "http://ws.healio.com/optometryapp/json/2/content/contactus/e5f1c476-3ac0-4ed2-9670-7b8c0c4e4613",
//        }  
//    },
//    data: {
//        Accept: "application/json"
//    },
//    schema: {
//        data: function(response) {
//            return response.ContentText; 
//        }
//    }
//});

//function showContactUs(e) {
//    contactusData.fetch(function() {
//        var template = kendo.template(($('#contactusTemplate').html()));
//        var data = { ContentText : this._pristineData.toString() };
//        var result = template(data);
//        $("#ctarget").html(result);
//    });
//}

//function showCategories(e) {
//    categoryData.fetch();
//}

//function showSubcategories(e) {
//    subcategoryData.fetch();
//}

//function showProducts(e) {
//    productData.fetch();
//}


//#region deprecated
//working view model approach
//var viewModel = kendo.observable({
//    content: "John Doe"
//});

//function showContactUs(e) {
//    contactusData.fetch(function () {
//        var data = this.data();
//        //var vm = new viewModel(this._pristineData);
//        viewModel.content = $('<textarea />').html(this._pristineData).val();
//        kendo.bind($("#ctarget"), viewModel);
//        //$("#ctarget").html(this._pristineData);
//    });
//}
//#endregion

//#region local json
var localContactUs = { "ContentText": "<form method=\"GET\" action=\"popup.html\" class=\"k-block\"><fieldset id=\"fs\"><div data-role=\"fieldcontain\"><label for=\"name\">Full Name:<\/label><input type=\"text\" name=\"name\" id=\"name\" value=\"\" \/><label for=\"email\">Email:<\/label><input type=\"email\" id=\"email\" name=\"email\" value=\"\" \/><label for=\"yog\">Year of Graduation:<\/label><input type=\"text\" placeholder=\"Expected year of graduation\" value=\"\" id=\"yog\" pattern=\"^\\d{4}$\" name=\"number\" \/><\/div><div data-role=\"fieldcontain\"><label for=\"textarea\">Comments:<\/label><div><textarea name=\"textarea\" id=\"textarea\"><\/textarea><\/div><\/div><div data-role=\"fieldcontain\"><button id=\"btnsubmit\" value=\"submit\" name=\"submit\" type=\"submit\" data-transition=\"pop\" class=\"k-button\" data-rel=\"dialog\">Submit<\/button><\/div><\/fieldset><\/form>" };

var localCategory = [{"MenuTitle":"Category 1","PageLink":"#category?category=cat1"},{"MenuTitle":"Category 2","PageLink":"#category?category=cat2"},{"MenuTitle":"Category 3","PageLink":"#category?category=cat3"}];

var localSubcategory = [{"MenuTitle":"Subcategory A","PageLink":"#subcategory?category=subcata"},{"MenuTitle":"Subcategory B","PageLink":"#subcategory?category=subcatb"}];

var localProduct = [{"DataRole":" data-role='list-divider'","DataIcon":"","Role":" role='heading'","Content":"<h2>Product A1<\/h2><p>This is a great product<\/p><p class='ui-li-aside'>$500<\/p>"},{"DataRole":"","DataIcon":" data-icon='false'","Role":"","Content":"<a href='#' data-rel=\"external\" onclick=\"var ref = window.open('https:\/\/drive.google.com\/file\/d\/0B-AmOLhOogplb0tMUUdhMk9MQ0E\/edit?usp=sharing', '_blank','location=yes','closebuttoncaption=Return');\">Product Information<\/a>"},{"DataRole":"","DataIcon":" data-icon='false'","Role":"","Content":"<a href='#' data-rel=\"external\" onclick=\"var ref = window.open('http:\/\/www.retinacme.com', '_blank','location=yes','closebuttoncaption=Return');\">Website<\/a>"},{"DataRole":" data-role='list-divider'","DataIcon":"","Role":" role='heading'","Content":"<h2>Product A2<\/h2><p>This is a great product too<\/p><p class='ui-li-aside'>$600<\/p>"},{"DataRole":"","DataIcon":" data-icon='false'","Role":"","Content":"<a href='#' data-rel=\"external\" onclick=\"var ref = window.open('https:\/\/drive.google.com\/file\/d\/0B-AmOLhOogplb0tMUUdhMk9MQ0E\/edit?usp=sharing', '_blank','location=yes','closebuttoncaption=Return');\">Product Information<\/a>"},{"DataRole":"","DataIcon":" data-icon='false'","Role":"","Content":"<a href='#' data-rel=\"external\" onclick=\"var ref = window.open('http:\/\/www.retinacme.com', '_blank','location=yes','closebuttoncaption=Return');\">Website<\/a>"}];

//#endregion