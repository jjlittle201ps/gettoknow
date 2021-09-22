import { useState } from "react";
import James from "../pages/img/James-Little.jpg";
import Joe from "../pages/img/Joe-D-.png";
import Nikitha from "../pages/img/Nikitha-Palapotta.jpg";
import Sathish from "../pages/img/Sathish.jpeg";
import Abhijath from "../pages/img/Abhijath.jpeg";
import Sankar from "../pages/img/Sankar.jpeg";
import Diego from "../pages/img/Diego.jpg";
import Naveen from "../pages/img/Naveen.jpg";
import Placeholder from "../pages/img/teammember.jpg";
import Image from "next/image";

// const questionsArray = [
// 	"Name one thing still on your bucket list",
// 	"Do you love working from home or would you rather be in the office? Is there a balance of both that you like best?",
// 	"What was the worst style choice you ever made?",
// 	"What was the worst haircut you ever had?",
// 	"You have your own late night talk show, who do you invite as your first guest?",
// 	"If you had to eat one meal everyday for the rest of your life what would it be?",
// 	"Say you’re independently wealthy and don’t have to work, what would you do with your time?",
// 	"What is your favorite magical or mythological animal?",
// 	"Who is your inspirational businessman or business woman and why?",
// 	"What is your favorite musical instrument and why?",
// 	"If you could choose any two famous people to have dinner with who would they be?",
// 	"What fruit or vegetable would you most want to be?",
// 	"If you could see one movie again for the first time, what would it be and why?",
// 	"If you could be any animal in the world, what animal would you choose to be?",
// 	"If you could be guaranteed one thing in life (besides money), what would it be?",
// 	"If you could write a book that was guaranteed to be a best seller, what would you write?",
// 	"Do you have any hidden talents?",
// 	"If you had your human body, but the head of an animal, what animal would you pick?",
// ];
// console.log(questionsArray.length);
const teamOnePs = [
	{
		name: " James",
		photo: James,
		location: "UK 🇬🇧",
		activity: "Mimic 3 Animal sounds!",
		questions: [
			"When did you get your first cell phone? What kind was it?",
			"If you were the captain of a pirate ship, what would be the name of your ship?",
		],
	},

	{
		name: " Abhijath",
		photo: Abhijath,
		location: "Chennai 🇮🇳",
		activity:
			"A twister of twists, Once untwisted a twist, And the twist that he twisted, Was a three-twisted twist. When the twister a-twisting will twist him a twine, For the twisting his twist, he three times doth entwist, But if one of the twines of the twist doth entwine, The twine that entwisteth, untwisteth the twine",
		questions: [
			"If you could be a kitchen appliance, what one would you be and why?",
			"If you could have an extra hour of free time everyday, how would you use it?",
		],
	},
	{
		name: " Diego",
		photo: Diego,
		location: "UK 🇬🇧",
		activity: "Tell a supernatural or ghost story! ",
		questions: [
			"What is the strangest gift you have ever received?",
			"Which of Snow White’s seven dwarfs describes you best (Bashful, Doc, Dopey, Grumpy, Happy, Sleepy or Sneezy)?",
		],
	},
	{
		name: " Dinesh",
		photo: Placeholder,
		location: "Chennai 🇮🇳",
		activity: "Three film dialouges of your favourite actors",
		questions: [
			"If you could have an endless supply of food, what would it be?",
			"Describe an experience in your life that changed your values?",
		],
	},
	{
		name: " Nikitha",
		photo: Nikitha,
		location: "UK 🇬🇧",
		activity: "Sing a Song!",
		questions: [
			"If you were a potato, what way would you like to be cooked?",
			"What is the most embarrassing thing you’ve ever done?",
		],
	},
	{
		name: " Himavarshini",
		photo: Placeholder,
		location: "Chennai 🇮🇳",
		activity: "Mimic your favourite song but without words!",
		questions: [
			"What is the worst trouble you go into as a kid?",
			"Do you prefer nights out or nights in?",
		],
	},
	{
		name: " Joe",
		photo: Joe,
		location: "UK 🇬🇧",
		activity:
			"Peter Piper picked a peck of pickled peppers, Peter Piper picked if Peter Piper picked a peck of pickled peppers. Where's the peck of pickled peppers Peter Piper picked?",
		questions: [
			"What is your favourite strange food combinations?",
			"Describe your dream holiday if money was no limit?",
		],
	},
	{
		name: " Jayasree",
		photo: Placeholder,
		location: "Chennai 🇮🇳",
		activity: "Mimic three sounds and others have to identify them correctly",
		questions: [
			"What is the worst food you ever eaten?",
			"Would you rather be able to run at 100 miles per hour or fly at 10 miles per hour",
			,
		],
	},
	{
		name: " Sankaranarayanan",
		photo: Sankar,
		location: "Chennai 🇮🇳",
		activity:
			"Tell 2 truths and 1 lie about yourself and others have to identify which is the lie",
		questions: [
			"Would you rather travel back in time to meet your ancestors or would you rather go to the future to meet your descendants?",
			"If you could immediately gain one skill, what would it be?",
			,
		],
	},
	{
		name: " Naveen",
		photo: Naveen,
		location: "UK 🇬🇧",
		activity: "Recite Twinkle Twinkle Little Star nursery rhyme in 3 emotions",
		questions: [
			"If you could have any super human power, what would it be?",
			"If you could give a piece of advice to your younger self, what would it be?",
		],
	},
	{
		name: " Sathish",
		photo: Sathish,
		location: "Chennai 🇮🇳",
		activity: "Describe the Uk in one word?",
		questions: [
			"What do you think the most important thing is for a workplace to have?",
			"Who is your favorite cartoon character?",
		],
	},
	{
		name: " Senthalir",
		photo: Placeholder,
		location: "Chennai 🇮🇳",
		activity: "Describe Chennai in one word?",
		questions: [
			"What was your first job?",
			"Who would you want on your team in a zombie apocalypse?",
			,
		],
	},
	{
		name: " Ramesh",
		photo: Placeholder,
		location: "Chennai 🇮🇳",
		activity: "Mimic your favourite cartoon character!",
		questions: [
			"What year would you visit if you had a time machine?",
			"What's your go-to dance move?",
			,
		],
	},
];
var i = 0;

export default function Home() {
	const [staff, setStaff] = useState();
	console.log(staff);
	if (staff != null)
		return (
			<div className="flex justify-center items-center ">
				<div className=" justify-center items-center grid grid-cols-1 container sm px-80">
					<div className="font-semibold inline-block py-1 px-2  rounded  uppercase last:mr-0 mr-1">
						{staff.name}
					</div>
					<div className="text-xs font-semibold inline-block py-1 px-2  rounded  uppercase last:mr-0 mr-1">
						{staff.location}
					</div>

					<Image src={staff.photo} alt={staff.name} width={400} height={500} />

					<br />
					<div className="text-xs font-semibold inline-block  break-normal rounded  uppercase ">
						{staff.activity}
						<br />

						{staff.questions.map((question) => (
							<>
								<br />
								<div className="text-xs font-semibold inline-block  break-normal rounded  uppercase ">
									{question}
								</div>
								<br />
							</>
						))}
					</div>
					<br />

					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
						onClick={() => setStaff(teamOnePs[i++])}
					>
						Go!
					</button>
				</div>
			</div>
		);
	else {
		return (
			<div className=" flex pt-48 justify-center items-center">
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					onClick={() => setStaff(teamOnePs[i])}
				>
					Go!
				</button>
			</div>
		);
	}
}
