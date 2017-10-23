var zodiacSign = [
{
	name: "aries",
	image: ("src", "https://i.pinimg.com/236x/ca/84/a6/ca84a656f25f1655081ad15aeb8fa515--star-wars-art-constellations.jpg"),
	about: "Aries is the first sign of the zodiac, and that's pretty much how those born under this sign see themselves: first. Aries are the leaders of the pack, first in line to get things going. Whether or not everything gets done is another question altogether, for an Aries prefers to initiate rather than to complete."
},
{
	name: "taurus",
	image: ("src", "https://i.pinimg.com/736x/37/56/41/375641863465d19f0baa557d0f9f1601--zodiac-art-zodiac-signs.jpg"),
	about: "Taurus, the second sign of the zodiac, is all about reward. Unlike the Aries love of the game, Taurus loves the rewards of the game. Think physical pleasures and material goods, for those born under this sign revel in delicious excess. They are also a tactile lot, enjoying a tender, even sensual, touch."
},
{
	name: "gemini",
	image: ("src", "https://i.pinimg.com/736x/45/3c/14/453c14921163c084594c6536a6cefb1c--zodiac-art-zodiac-signs.jpg"),
    about: "Gemini is the third sign of the zodiac, and those born under this sign will be quick to tell you all about it. That's because they love to talk! It's not just idle chatter with these folks, either. The driving force behind a Gemini's conversation is their mind."

},
{
	name: "cancer",
	image: ("src", "https://i.pinimg.com/736x/32/c7/2c/32c72c46b46bc6e381f6357dd41dd103--zodiac-facts-zodiac-signs.jpg"),
	about: "Cancer, the fourth sign of the zodiac, is all about home. Those born under this sign are 'roots' kinds of people, and take great pleasure in the comforts of home and family. Cancers are maternal, domestic and love to nurture others."
},
{
	name: "leo",
	image: ("src", "https://i.pinimg.com/originals/c3/92/fc/c392fc534cd21004a421418239680baa.jpg"),
	about: "Warm, action-oriented and driven by the desire to be loved and admired, the Leo have an air royalty about them. They love to be in the limelight, which is why many of them make a career in the performing arts. The personality of a Leo is made up of some positive as well as negative traits."
},
{
	name: "virgo",
	image: ("src", "https://i.pinimg.com/236x/7d/bf/2c/7dbf2c04814c7a76a1006460b6aba7cc--zodiac-art-zodiac-signs.jpg"),
	about: "Virgo is the sixth sign of the zodiac, to be exact, and that's the way Virgos like it: exacting. Those born under this sign are forever the butt of jokes for being so picky and critical (and they can be), but their 'attention to detail' is for a reason: to help others."
},
{
	name: "libra",
	image: ("src", "https://i.pinimg.com/originals/a7/d7/c3/a7d7c340eb1dd6d76cf29aba56e27e79.jpg"),
	about: "The people born under the Sign Libra are kind, gentle and lovers of beauty, harmony and peace. However, in their effort to keep everyone happy, they find it difficult to say 'NO' to anyone, and as a result, they end up getting stressed. They have a lot of positive traits, but some negative ones, too."
},
{
	name: "scorpio",
	image: ("src", "https://i.pinimg.com/736x/70/69/33/70693357898edd6e5aa847306d114ff7--zodiac-art-zodiac-signs.jpg"),
	about: "Scorpio is the eighth sign of the zodiac, and that shouldn't be taken lightly -- nor should Scorpios! Those born under this sign are dead serious in their mission to learn about others. ... The Scorpion symbolizes Scorpio, and that is no accident."
},
{
	name: "sagittarius",
	image: ("src", "https://i.pinimg.com/236x/ce/a5/3b/cea53b6b9c8f1fa64fad473c320fa152--zodiac-art-zodiac-signs.jpg"),
	about: "Sagittarius, the ninth sign of the zodiac, is the home of the wanderers of the zodiac. It's not a mindless ramble for these folks, either. Sagittarians are truth-seekers, and the best way for them to do this is to hit the road, talk to others and get some answers."
},
{
	name: "capricorn",
	image: ("src", "https://i.pinimg.com/236x/21/84/0a/21840a3f44905a71c71c77d98e9f4837.jpg"),
	about: "Capricorn, the tenth sign of the zodiac, is all about hard work. Those born under this sign are more than happy to put in a full day at the office, realizing that it will likely take a lot of those days to get to the top. That's no problem, since Capricorns are both ambitious and determined: they will get there."
},
{
	name: "aquarius",
	image: ("src", "https://i.pinimg.com/736x/a1/fd/d3/a1fdd3a0a0393a72806e48c8e93c567b.jpg"),
	about: "Aquarius is the eleventh sign of the zodiac, and Aquarians are the perfect representatives for the Age of Aquarius. Those born under this sign have the social conscience needed to carry us into the new millennium."
},
{
	name: "pisces",
	image: ("src", "https://i.pinimg.com/236x/e4/d7/33/e4d733fe902ef60ad1c9aa9a2942f453--zodiac-art-zodiac-signs.jpg"),
	about: "Pisces is a Water sign and as such this zodiac sign is characterized by empathy and expressed emotional capacity. Their ruling planet is Neptune, so Pisces are more intuitive than others and have an artistic talent."
}
]

function getInfo() {
	var zodiacType = document.getElementById("zodiacType").value.toLowerCase();

	for(i = 0; i < zodiacSign.length; i++) {
		if(zodiacType == zodiacSign[i].name) {
			document.getElementById("signName").textContent = zodiacSign[i].name;
			document.getElementById("signImage").src = zodiacSign[i].image;
			document.getElementById("signAbout").textContent = zodiacSign[i].about;

			return;
		}else {
			document.getElementById("signName").textContent = "Please try again. Something went wrong";
			document.getElementById("signImage").src = "";
			document.getElementById("signAbout").textContent = "";
		}
	}
}

















