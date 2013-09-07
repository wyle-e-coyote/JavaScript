// Here's my data model
var DateOfEasterViewModel = function(first, last) {
    this.firstName = ko.observable(first);
    this.lastName = ko.observable(last);
    
    this.fullName = ko.computed(function(){
        return this.firstName() + " " + this.lastName();
    }, this);
};
 
ko.applyBindings(new DateOfEasterViewModel("Chris", "Lawrence")); // This makes Knockout get to work
