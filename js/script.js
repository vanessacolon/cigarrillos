$(document).ready(function($) {


	$(".submit").click(function(){
		var howManyPacks = $(".manypacks").val();
		var thePrice = $(".price").val();
		var sentences = "<p>" + writeSentences(howManyPacks, thePrice) + "</p>";
		$(".results").html(sentences)

	});


}

});

}

// User has to... 
// Write o select how many cigarette packs buy in a week
// Then choose the price in dropdwon menu 
// Then click Submit
// Output 5 senteces with the amount of money spend for a week, a month, a year, 10 years, and 20 years. 
// 
//function for the 5 sentences for each price?
// numbers of cigarette packs * price of pack * 7 days
// numbers of cigarette packs * price of pack * 30 days
// numbers of cigarette packs * price of pack * 365 days
// numbers of cigarette packs * price of pack * 3650 days
// numbers of cigarette packs * price of pack * 7300 days


/* This command will output the value of cost per a week in 9.49 per pack in NYS plus tax rate $4.35 */
function costPerWeek(cigPriceA1) {
    var cost = cigPriceA1 * 7;
    return "$" + cost + " in one week. You might can buy a better lunch with these money.";
}

var usersCigWeekA1 = costPerWeek(13.84);


/* This command will output the value of cost per a month in 9.49 per pack in NYS plus tax rate $4.35 */
function costPerMonth(cigPriceA1) {
    var cost = cigPriceA1 * 30;
    return "$" + cost + " in one month. Think in that cellphone you want!";
}

var usersCigMonthA1 = costPerMonth(13.84);


/* This command will output the value of cost per a year in 9.49 per pack in NYS plus tax rate $4.35 */
function costPerYear(cigPriceA1) {
    var cost = cigPriceA1 * 365;
    return "$" + cost + " in one year. You can take a vacation with these money!";
}

var usersCigYearA1 = costPerYear(13.84);


/* This command will output the value of cost per 10 years in 9.49 per pack in NYS plus tax rate $4.35 */
function costPer10Years(cigPriceA1) {
    var cost = cigPriceA1 * 365 * 10;
    return "$" + cost + " in 10 years. Imagine all you can buy with these money!";
}

var usersCig10YA1 = costPer10Years(13.84);


/* This command will output the value of cost per 20 years in 9.49 per pack in NYS plus tax rate $4.35 */
function costPer20Years(cigPriceA1) {
    var cost = cigPriceA1 * 365 * 20;
    return "$" + cost + " in 20 years. You can buy your own house!";
}

var usersCig20YA1 = costPer20Years(13.84);

};