import { Qs } from "./questions.js";

export const a = {
	S_AGREE: 1.0,
	AGREE: 0.5,
	P_AGREE: 0.25,
	NEUTRAL: 0.0,
	P_DISAGREE: -0.25,
	DISAGREE: -0.5,
	S_DISAGREE: -1.0
}

export const ideologies = [
	{
		"name": "Radical Transmedicalism",
		"desc": "Radical transmedicalists believe in rights for transsexuals only, with non-binary people excluded from this.",
		"stats": {
			[Qs.TWO_GENDERS]: a.S_AGREE,
			[Qs.PROUD]: a.DISAGREE,
			[Qs.ABOLISH_GENDER]: a.DISAGREE,
			[Qs.GENITAL_DYSPHORIA_REQUIRED]: a.AGREE,
			[Qs.IRAN_NOT_TRANSMED_ENOUGH]: a.NEUTRAL,
			[Qs.TRANS_NOT_LESS_TRANS]: a.S_AGREE,
			[Qs.RED_FLAG_ANDRO_M]: a.P_DISAGREE,
			[Qs.GENDER_ROLES]: a.DISAGREE,
		}
	},
	{
		"name": "Reactionary Transmedicalism",
		"desc": "Reactionary transmedicalists are radical transmedicalists who believe that society must return to the usual male and female model. They tend to believe that you are either born male or female and that transsexuals (as well as some intersex people) are a pragmatic exception. Many of them may even hope for something to be developed to \"eradicate\" transsexualism from future births.",
		"stats": {
			[Qs.TWO_GENDERS]: a.S_AGREE,
			[Qs.PROUD]: a.S_DISAGREE,
			[Qs.ABOLISH_GENDER]: a.S_DISAGREE,
			[Qs.GENITAL_DYSPHORIA_REQUIRED]: a.S_AGREE,
			[Qs.IRAN_NOT_TRANSMED_ENOUGH]: a.S_AGREE,
			[Qs.TRANS_NOT_LESS_TRANS]: a.AGREE,
			[Qs.RED_FLAG_ANDRO_M]: a.AGREE,
			[Qs.GENDER_ROLES]: a.S_AGREE,
		}
	},
	{
		"name": "Neotransmedicalism",
		"desc": "Neotransmedicalists believe in rights for transsexuals and non-binary people, usually under the pretense that, while NB people aren't trans, they still have dysphoria of some kind.",
		"stats": {
			[Qs.TWO_GENDERS]: a.DISAGREE,
			[Qs.PROUD]: a.P_DISAGREE,
			[Qs.ABOLISH_GENDER]: a.DISAGREE,
			[Qs.GENITAL_DYSPHORIA_REQUIRED]: a.P_DISAGREE,
			[Qs.IRAN_NOT_TRANSMED_ENOUGH]: a.S_DISAGREE,
			[Qs.TRANS_NOT_LESS_TRANS]: a.S_AGREE,
			[Qs.RED_FLAG_ANDRO_M]: a.S_DISAGREE,
			[Qs.DUOSEX_NULLSEX]: a.AGREE,
			[Qs.GENDER_ROLES]: a.DISAGREE,
		}
	},
	{
		"name": "Gender Abolitionism",
		"desc": "Gender abolitionists believe that gender is an oppressive social construct that must be abolished.",
		"stats": {
			[Qs.TWO_GENDERS]: a.S_DISAGREE,
			[Qs.ABOLISH_GENDER]: a.S_AGREE,
			[Qs.GENITAL_DYSPHORIA_REQUIRED]: a.S_DISAGREE,
			[Qs.IRAN_NOT_TRANSMED_ENOUGH]: a.S_DISAGREE,
			[Qs.TRANS_NOT_LESS_TRANS]: a.S_AGREE,
			[Qs.RED_FLAG_ANDRO_M]: a.S_DISAGREE,
			[Qs.GENDER_ROLES]: a.S_DISAGREE,
		}
	},
	{
		"name": "Blanchardism",
		"desc": "Followers of Ray Blanchard's school of thought in terms of transsexuality (Blanchardians) believe that (MtF) trans people and trans-identified people can be separated into two categories: HSTS (androphilic) and AGP (gynephilic, usually \"not really trans\").",
		"stats": {
			[Qs.PROUD]: a.DISAGREE,
			[Qs.ABOLISH_GENDER]: a.DISAGREE,
			[Qs.GENITAL_DYSPHORIA_REQUIRED]: a.S_AGREE,
			[Qs.TRANS_NOT_LESS_TRANS]: a.DISAGREE,
			[Qs.RED_FLAG_ANDRO_M]: a.S_AGREE
		}
	},
	{
		"name": "Transgenderism",
		"desc": "Transgenderists believe that anyone can be whatever gender they please, regardless of dysphoria.",
		"stats": {
			[Qs.TWO_GENDERS]: a.S_DISAGREE,
			[Qs.PROUD]: a.AGREE,
			[Qs.ABOLISH_GENDER]: a.NEUTRAL,
			[Qs.GENITAL_DYSPHORIA_REQUIRED]: a.S_DISAGREE,
			[Qs.IRAN_NOT_TRANSMED_ENOUGH]: a.S_DISAGREE,
			[Qs.TRANS_NOT_LESS_TRANS]: a.S_AGREE,
			[Qs.RED_FLAG_ANDRO_M]: a.S_DISAGREE,
			[Qs.GENDER_ROLES]: a.DISAGREE,
		}
	},
	{
		"name": "Radical Transgenderism",
		"desc": "Radical transgenderists are transgenderists, but to a more extreme extent. They usually believe in the insertion of transness into everyday life, such as mandatory inclusive language, and believe that sex organs are inherently genderless and could be on anybody.",
		"stats": {
			[Qs.TWO_GENDERS]: a.S_DISAGREE,
			[Qs.PROUD]: a.S_AGREE,
			[Qs.ABOLISH_GENDER]: a.P_AGREE,
			[Qs.GENITAL_DYSPHORIA_REQUIRED]: a.S_DISAGREE,
			[Qs.IRAN_NOT_TRANSMED_ENOUGH]: a.S_DISAGREE,
			[Qs.TRANS_NOT_LESS_TRANS]: a.S_AGREE,
			[Qs.RED_FLAG_ANDRO_M]: a.S_DISAGREE,
			[Qs.GENDER_ROLES]: a.S_DISAGREE,
		}
	},
	/*{
		"name": "Transpopulism",
		"desc": "Transpopulists believe that we must ONLY do what the public wants, often forfeiting fundamental transsexual rights and other liberties in the process.",
		"stats": {
			[Qs.GENITAL_DYSPHORIA_REQUIRED]: a.S_AGREE,
			[Qs.TRANS_NOT_LESS_TRANS]: a.DISAGREE,
			[Qs.RED_FLAG_ANDRO_M]: a.AGREE,
		}
	},*/
];
