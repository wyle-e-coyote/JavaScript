 // Here's my data model
function DateOfEasterViewModel(year) {
    this.year = ko.observable(year);
    
    this.dayOfEaster = ko.computed(function() {
        var iyear = parseInt(this.year());
        var a = iyear % 19;
        var b = truncateDecimals(iyear / 100);
        var c = iyear % 100;
        var d = truncateDecimals(b / 4);
        var e = b % 4;
        var f = truncateDecimals((b + 8) / 25);
        var g = truncateDecimals((b - f + 1) / 3);
        var h = ((19 * a) + b - d - g + 15) % 30;
        var i = truncateDecimals(c / 4);
        var k = c % 4;
        var l = (32 + (2 * (e + i)) - h - k) % 7;
        var m = truncateDecimals((a + (11 * h) + (22 * l)) / 451);
        var n = truncateDecimals((h + l - (7 * m) + 114) / 31);
        var p = (h + l - (7 * m) + 114) % 31;
        
        return p + 1;
    }, this);
    
    this.monthOfEaster = ko.computed(function() {
        var iyear = parseInt(this.year());
        var a = iyear % 19;
        var b = truncateDecimals(iyear / 100);
        var c = iyear % 100;
        var d = truncateDecimals(b / 4);
        var e = b % 4;
        var f = truncateDecimals((b + 8) / 25);
        var g = truncateDecimals((b - f + 1) / 3);
        var h = ((19 * a) + b - d - g + 15) % 30;
        var i = truncateDecimals(c / 4);
        var k = c % 4;
        var l = (32 + (2 * (e + i)) - h - k) % 7;
        var m = truncateDecimals((a + (11 * h) + (22 * l)) / 451);
        var n = truncateDecimals((h + l - (7 * m) + 114) / 31);
        var p = (h + l - (7 * m) + 114) % 31;
        
        if (n == 3) 
        {
            return "March";
        } 
        else 
        {
            return "April";
        }
    }, this);
    
    function truncateDecimals(num) {
        var numS = num.toString();
        var decPos = numS.indexOf('.');
        var result = numS;
        if (decPos > 0)
        {
            result = numS.substr(0, 1 + decPos);
        }

        if(isNaN(result)) {
            result = 0;
        }

        return parseFloat(result);
    }
};

ko.applyBindings(new DateOfEasterViewModel("2009")); // This makes Knockout get to work
