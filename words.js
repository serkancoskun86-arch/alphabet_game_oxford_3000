const a1Words = [
    // A Harfi
    { l: 'A', q: 'A fruit that is red or green.', a: ['apple'], lv: 'A1' },
    { l: 'A', q: 'The place where you go to catch a flight.', a: ['airport'], lv: 'A1' },
    { l: 'A', q: 'The month after March.', a: ['april'], lv: 'A1' },
    { l: 'A', q: 'The opposite of young.', a: ['adult'], lv: 'A1' },
    { l: 'A', q: 'One more; a different one.', a: ['another'], lv: 'A1' },
    { l: 'A', q: 'To say something to someone.', a: ['answer'], lv: 'A1' },
    { l: 'A', q: 'The month after July.', a: ['august'], lv: 'A1' },
    { l: 'A', q: 'The part of the body between the hand and shoulder.', a: ['arm'], lv: 'A1' },

    // B Harfi
    { l: 'B', q: 'The first meal of the day.', a: ['breakfast'], lv: 'A1' },
    { l: 'B', q: 'A large animal with fur.', a: ['bear'], lv: 'A1' },
    { l: 'B', q: 'A color like the sky.', a: ['blue'], lv: 'A1' },
    { l: 'B', q: 'Something you read.', a: ['book'], lv: 'A1' },
    { l: 'B', q: 'A vehicle that carries many people.', a: ['bus'], lv: 'A1' },
    { l: 'B', q: 'Yellow fruit that monkeys like.', a: ['banana'], lv: 'A1' },
    { l: 'B', q: 'A child who is a male.', a: ['boy'], lv: 'A1' },
    { l: 'B', q: 'A person who bakes bread.', a: ['baker'], lv: 'A1' },

    // C Harfi
    { l: 'C', q: 'A vehicle with four wheels.', a: ['car'], lv: 'A1' },
    { l: 'C', q: 'A pet that says meow.', a: ['cat'], lv: 'A1' },
    { l: 'C', q: 'A place where people live, larger than a village.', a: ['city'], lv: 'A1' },
    { l: 'C', q: 'Something to sit on.', a: ['chair'], lv: 'A1' },
    { l: 'C', q: 'A person who is not an adult.', a: ['child'], lv: 'A1' },
    { l: 'C', q: 'Something you wear on your body.', a: ['clothes'], lv: 'A1' },
    { l: 'C', q: 'To prepare food using heat.', a: ['cook'], lv: 'A1' },
    { l: 'C', q: 'A drink made from roasted beans.', a: ['coffee'], lv: 'A1' },

    // D Harfi
    { l: 'D', q: 'A pet that barks.', a: ['dog'], lv: 'A1' },
    { l: 'D', q: 'A person who treats sick people.', a: ['doctor'], lv: 'A1' },
    { l: 'D', q: 'The opposite of night.', a: ['day'], lv: 'A1' },
    { l: 'D', q: 'Something you open to enter a room.', a: ['door'], lv: 'A1' },
    { l: 'D', q: 'To move your body to music.', a: ['dance'], lv: 'A1' },
    { l: 'D', q: 'A liquid you swallow.', a: ['drink'], lv: 'A1' },
    { l: 'D', q: 'The last meal of the day.', a: ['dinner'], lv: 'A1' },
    { l: 'D', q: 'To create a picture with a pencil.', a: ['draw'], lv: 'A1' },

    // E Harfi
    { l: 'E', q: 'Something you can do with food.', a: ['eat'], lv: 'A1' },
    { l: 'E', q: 'It comes from a chicken.', a: ['egg'], lv: 'A1' },
    { l: 'E', q: 'The number after seven.', a: ['eight'], lv: 'A1' },
    { l: 'E', q: 'The opposite of start.', a: ['end'], lv: 'A1' },
    { l: 'E', q: 'A very large animal with a trunk.', a: ['elephant'], lv: 'A1' },
    { l: 'E', q: 'The part of the body you see with.', a: ['eye'], lv: 'A1' },
    { l: 'E', q: 'The time of day before night.', a: ['evening'], lv: 'A1' },
    { l: 'E', q: 'The opposite of difficult.', a: ['easy'], lv: 'A1' },

    // F Harfi
    { l: 'F', q: 'A group of people related to you.', a: ['family'], lv: 'A1' },
    { l: 'F', q: 'Something you eat.', a: ['food'], lv: 'A1' },
    { l: 'F', q: 'A person you like and talk to.', a: ['friend'], lv: 'A1' },
    { l: 'F', q: 'The opposite of slow.', a: ['fast'], lv: 'A1' },
    { l: 'F', q: 'An animal that lives in water.', a: ['fish'], lv: 'A1' },
    { l: 'F', q: 'The number after three.', a: ['four'], lv: 'A1' },
    { l: 'F', q: 'A colorful plant.', a: ['flower'], lv: 'A1' },
    { l: 'F', q: 'I am okay/happy: I am ___.', a: ['fine'], lv: 'A1' },

    // G Harfi
    { l: 'G', q: 'A color like the grass.', a: ['green'], lv: 'A1' },
    { l: 'G', q: 'An area for growing plants.', a: ['garden'], lv: 'A1' },
    { l: 'G', q: 'A child who is female.', a: ['girl'], lv: 'A1' },
    { l: 'G', q: 'To move from here to there.', a: ['go'], lv: 'A1' },
    { l: 'G', q: 'The opposite of bad.', a: ['good'], lv: 'A1' },
    { l: 'G', q: 'Something to drink from.', a: ['glass'], lv: 'A1' },
    { l: 'G', q: 'To provide something to someone.', a: ['give'], lv: 'A1' },
    { l: 'G', q: 'A stringed instrument.', a: ['guitar'], lv: 'A1' },

    // H Harfi
    { l: 'H', q: 'A place where you live.', a: ['home', 'house'], lv: 'A1' },
    { l: 'H', q: 'Building for sick people.', a: ['hospital'], lv: 'A1' },
    { l: 'H', q: 'Opposite of cold.', a: ['hot'], lv: 'A1' },
    { l: 'H', q: 'The end of your arm.', a: ['hand'], lv: 'A1' },
    { l: 'H', q: 'Something you wear on your head.', a: ['hat'], lv: 'A1' },
    { l: 'H', q: 'The part of the body above the neck.', a: ['head'], lv: 'A1' },
    { l: 'H', q: 'Opposite of sad.', a: ['happy'], lv: 'A1' },
    { l: 'H', q: 'To have something in your hand.', a: ['hold'], lv: 'A1' },

    // I Harfi
    { l: 'I', q: 'Frozen water.', a: ['ice'], lv: 'A1' },
    { l: 'I', q: 'Cold sweet dessert.', a: ['ice cream'], lv: 'A1' },
    { l: 'I', q: 'Something that cannot happen.', a: ['impossible'], lv: 'A1' },
    { l: 'I', q: 'The opposite of "out".', a: ['in'], lv: 'A1' },
    { l: 'I', q: 'A country in Europe.', a: ['italy'], lv: 'A1' },
    { l: 'I', q: 'When you are sick.', a: ['ill'], lv: 'A1' },
    { l: 'I', q: 'A pronoun for yourself.', a: ['i'], lv: 'A1' },
    { l: 'I', q: 'A smart thought.', a: ['idea'], lv: 'A1' },

    // J Harfi
    { l: 'J', q: 'Something you do for money.', a: ['job'], lv: 'A1' },
    { l: 'J', q: 'A drink from fruit.', a: ['juice'], lv: 'A1' },
    { l: 'J', q: 'The month after May.', a: ['june'], lv: 'A1' },
    { l: 'J', q: 'The month after June.', a: ['july'], lv: 'A1' },
    { l: 'J', q: 'To spring into the air.', a: ['jump'], lv: 'A1' },
    { l: 'J', q: 'Clothing for the upper body.', a: ['jacket'], lv: 'A1' },
    { l: 'J', q: 'The first month of the year.', a: ['january'], lv: 'A1' },
    { l: 'J', q: 'A sweet food made from fruit.', a: ['jam'], lv: 'A1' },

    // K Harfi
    { l: 'K', q: 'The room where you cook.', a: ['kitchen'], lv: 'A1' },
    { l: 'K', q: 'To hit with your foot.', a: ['kick'], lv: 'A1' },
    { l: 'K', q: 'A male ruler.', a: ['king'], lv: 'A1' },
    { l: 'K', q: 'You use this to open a door.', a: ['key'], lv: 'A1' },
    { l: 'K', q: 'To touch with your lips.', a: ['kiss'], lv: 'A1' },
    { l: 'K', q: 'The middle part of the leg.', a: ['knee'], lv: 'A1' },
    { l: 'K', q: 'To have information.', a: ['know'], lv: 'A1' },
    { l: 'K', q: 'A toy that flies.', a: ['kite'], lv: 'A1' },

    // L Harfi
    { l: 'L', q: 'To hear carefully.', a: ['listen'], lv: 'A1' },
    { l: 'L', q: 'A place for many books.', a: ['library'], lv: 'A1' },
    { l: 'L', q: 'The opposite of short.', a: ['long'], lv: 'A1' },
    { l: 'L', q: 'A strong feeling of liking.', a: ['love'], lv: 'A1' },
    { l: 'L', q: 'Opposite of small.', a: ['large'], lv: 'A1' },
    { l: 'L', q: 'To get new knowledge.', a: ['learn'], lv: 'A1' },
    { l: 'L', q: 'A part of the body for walking.', a: ['leg'], lv: 'A1' },
    { l: 'L', q: 'It helps you see in the dark.', a: ['light'], lv: 'A1' },

    // M Harfi
    { l: 'M', q: 'The female parent.', a: ['mother', 'mom'], lv: 'A1' },
    { l: 'M', q: 'Coins or notes used to buy things.', a: ['money'], lv: 'A1' },
    { l: 'M', q: 'The start of the day.', a: ['morning'], lv: 'A1' },
    { l: 'M', q: 'An adult male.', a: ['man'], lv: 'A1' },
    { l: 'M', q: 'Food from cows or sheep.', a: ['meat'], lv: 'A1' },
    { l: 'M', q: 'White liquid for cereal.', a: ['milk'], lv: 'A1' },
    { l: 'M', q: 'It shines in the night sky.', a: ['moon'], lv: 'A1' },
    { l: 'M', q: 'A story at the cinema.', a: ['movie'], lv: 'A1' },

    // N Harfi
    { l: 'N', q: 'The opposite of old.', a: ['new'], lv: 'A1' },
    { l: 'N', q: 'The dark time of the day.', a: ['night'], lv: 'A1' },
    { l: 'N', q: 'The number before ten.', a: ['nine'], lv: 'A1' },
    { l: 'N', q: 'The 11th month of the year.', a: ['november'], lv: 'A1' },
    { l: 'N', q: 'Part of the body for smelling.', a: ['nose'], lv: 'A1' },
    { l: 'N', q: 'The opposite of yes.', a: ['no'], lv: 'A1' },
    { l: 'N', q: 'Zero things.', a: ['nothing'], lv: 'A1' },
    { l: 'N', q: 'What you call someone.', a: ['name'], lv: 'A1' },

    // O Harfi
    { l: 'O', q: 'A fruit and a color.', a: ['orange'], lv: 'A1' },
    { l: 'O', q: 'A huge area of salt water.', a: ['ocean'], lv: 'A1' },
    { l: 'O', q: 'The 10th month of the year.', a: ['october'], lv: 'A1' },
    { l: 'O', q: 'The opposite of young.', a: ['old'], lv: 'A1' },
    { l: 'O', q: 'The opposite of closed.', a: ['open'], lv: 'A1' },
    { l: 'O', q: 'The number after zero.', a: ['one'], lv: 'A1' },
    { l: 'O', q: 'Not inside.', a: ['out'], lv: 'A1' },
    { l: 'O', q: 'Above something.', a: ['over'], lv: 'A1' },

    // P Harfi
    { l: 'P', q: 'A public green space.', a: ['park'], lv: 'A1' },
    { l: 'P', q: 'You use this to call someone.', a: ['phone'], lv: 'A1' },
    { l: 'P', q: 'You use this to write.', a: ['pen'], lv: 'A1' },
    { l: 'P', q: 'A human being.', a: ['person'], lv: 'A1' },
    { l: 'P', q: 'To have fun with a game.', a: ['play'], lv: 'A1' },
    { l: 'P', q: 'A photo or drawing.', a: ['picture'], lv: 'A1' },
    { l: 'P', q: 'A color (light red).', a: ['pink'], lv: 'A1' },
    { l: 'P', q: 'You put food on this.', a: ['plate'], lv: 'A1' },

    // Q Harfi
    { l: 'Q', q: 'A female ruler.', a: ['queen'], lv: 'A1' },
    { l: 'Q', q: 'What you ask.', a: ['question'], lv: 'A1' },
    { l: 'Q', q: 'Very fast.', a: ['quickly'], lv: 'A1' },
    { l: 'Q', q: 'Not loud.', a: ['quiet'], lv: 'A1' },
    { l: 'Q', q: 'To stop (a job or game).', a: ['quit'], lv: 'A1' },
    { l: 'Q', q: 'A line of people.', a: ['queue'], lv: 'A1' },
    { l: 'Q', q: 'Completely or very.', a: ['quite'], lv: 'A1' },
    { l: 'Q', q: 'A short test.', a: ['quiz'], lv: 'A1' },

    // R Harfi
    { l: 'R', q: 'Water from the clouds.', a: ['rain'], lv: 'A1' },
    { l: 'R', q: 'The color of a tomato.', a: ['red'], lv: 'A1' },
    { l: 'R', q: 'To look at words.', a: ['read'], lv: 'A1' },
    { l: 'R', q: 'To move very fast.', a: ['run'], lv: 'A1' },
    { l: 'R', q: 'Part of a house.', a: ['room'], lv: 'A1' },
    { l: 'R', q: 'A place to buy food.', a: ['restaurant'], lv: 'A1' },
    { l: 'R', q: 'A lot of water that moves.', a: ['river'], lv: 'A1' },
    { l: 'R', q: 'The opposite of wrong.', a: ['right'], lv: 'A1' },

    // S Harfi
    { l: 'S', q: 'It gives us light and heat.', a: ['sun'], lv: 'A1' },
    { l: 'S', q: 'A place where students learn.', a: ['school'], lv: 'A1' },
    { l: 'S', q: 'To make music with your voice.', a: ['sing'], lv: 'A1' },
    { l: 'S', q: 'The opposite of tall.', a: ['short'], lv: 'A1' },
    { l: 'S', q: 'The opposite of big.', a: ['small'], lv: 'A1' },
    { l: 'S', q: 'A place to buy things.', a: ['shop'], lv: 'A1' },
    { l: 'S', q: 'To rest at night.', a: ['sleep'], lv: 'A1' },
    { l: 'S', q: 'The hottest season.', a: ['summer'], lv: 'A1' },

    // T Harfi
    { l: 'T', q: 'Opposite of short.', a: ['tall'], lv: 'A1' },
    { l: 'T', q: 'A person who helps you learn.', a: ['teacher'], lv: 'A1' },
    { l: 'T', q: 'The number after nine.', a: ['ten'], lv: 'A1' },
    { l: 'T', q: 'A hot drink.', a: ['tea'], lv: 'A1' },
    { l: 'T', q: 'To speak with someone.', a: ['talk'], lv: 'A1' },
    { l: 'T', q: 'A long vehicle on tracks.', a: ['train'], lv: 'A1' },
    { l: 'T', q: 'A large plant.', a: ['tree'], lv: 'A1' },
    { l: 'T', q: 'The day after Monday.', a: ['tuesday'], lv: 'A1' },

    // U Harfi
    { l: 'U', q: 'You use it when it rains.', a: ['umbrella'], lv: 'A1' },
    { l: 'U', q: 'The opposite of down.', a: ['up'], lv: 'A1' },
    { l: 'U', q: 'To employ something.', a: ['use'], lv: 'A1' },
    { l: 'U', q: 'Below something.', a: ['under'], lv: 'A1' },
    { l: 'U', q: 'Sad; not happy.', a: ['unhappy'], lv: 'A1' },
    { l: 'U', q: 'Your father\'s brother.', a: ['uncle'], lv: 'A1' },
    { l: 'U', q: 'To know what something means.', a: ['understand'], lv: 'A1' },
    { l: 'U', q: 'Special clothes for school.', a: ['uniform'], lv: 'A1' },

    // V Harfi
    { l: 'V', q: 'Smaller than a city.', a: ['village'], lv: 'A1' },
    { l: 'V', q: 'Carrots, peas, or onions.', a: ['vegetable'], lv: 'A1' },
    { l: 'V', q: 'To go to see a friend.', a: ['visit'], lv: 'A1' },
    { l: 'V', q: 'A musical instrument with strings.', a: ['violin'], lv: 'A1' },
    { l: 'V', q: 'The sound you make.', a: ['voice'], lv: 'A1' },
    { l: 'V', q: 'A car, bus, or truck.', a: ['vehicle'], lv: 'A1' },
    { l: 'V', q: 'A holiday.', a: ['vacation'], lv: 'A1' },
    { l: 'V', q: 'A mountain with fire inside.', a: ['volcano'], lv: 'A1' },

    // W Harfi
    { l: 'W', q: 'We drink it to live.', a: ['water'], lv: 'A1' },
    { l: 'W', q: 'Not hot, but not cold.', a: ['warm'], lv: 'A1' },
    { l: 'W', q: 'To move on your feet.', a: ['walk'], lv: 'A1' },
    { l: 'W', q: 'It tells you the time.', a: ['watch'], lv: 'A1' },
    { l: 'W', q: 'The coldest season.', a: ['winter'], lv: 'A1' },
    { l: 'W', q: 'The color of milk.', a: ['white'], lv: 'A1' },
    { l: 'W', q: 'An adult female.', a: ['woman'], lv: 'A1' },
    { l: 'W', q: 'To do a job.', a: ['work'], lv: 'A1' },

    // Y Harfi
    { l: 'Y', q: 'The color of a banana.', a: ['yellow'], lv: 'A1' },
    { l: 'Y', q: '12 months.', a: ['year'], lv: 'A1' },
    { l: 'Y', q: 'Opposite of no.', a: ['yes'], lv: 'A1' },
    { l: 'Y', q: 'The day before today.', a: ['yesterday'], lv: 'A1' },
    { l: 'Y', q: 'Not old.', a: ['young'], lv: 'A1' },
    { l: 'Y', q: 'The yellow part of an egg.', a: ['yolk'], lv: 'A1' },
    { l: 'Y', q: 'A food made from milk.', a: ['yogurt', 'yoghurt'], lv: 'A1' },
    { l: 'Y', q: 'The person I am talking to.', a: ['you'], lv: 'A1' },

    // Z Harfi
    { l: 'Z', q: 'A place with wild animals.', a: ['zoo'], lv: 'A1' },
    { l: 'Z', q: 'The number before one.', a: ['zero'], lv: 'A1' },
    { l: 'Z', q: 'Animal with black and white stripes.', a: ['zebra'], lv: 'A1' },
    { l: 'Z', q: 'It closes your trousers or coat.', a: ['zip', 'zipper'], lv: 'A1' },
    { l: 'Z', q: 'To go very fast.', a: ['zoom'], lv: 'A1' },
    { l: 'Z', q: 'An area or part of a city.', a: ['zone'], lv: 'A1' },
    { l: 'Z', q: 'A line like a "W".', a: ['zigzag'], lv: 'A1' },
    { l: 'Z', q: 'Energy and excitement.', a: ['zest'], lv: 'A1' }
];

const a2Words = [
    // A Harfi
    { l: 'A', q: 'To say yes to an invitation or an offer.', a: ['accept'], lv: 'A2' },
    { l: 'A', q: 'A person who performs in a play or movie.', a: ['actor'], lv: 'A2' },
    { l: 'A', q: 'Something you do for enjoyment or exercise.', a: ['activity'], lv: 'A2' },
    { l: 'A', q: 'The part of a story that is exciting.', a: ['action'], lv: 'A2' },
    { l: 'A', q: 'To suggest what someone should do.', a: ['advise'], lv: 'A2' },
    { l: 'A', q: 'Used to correct a mistake or give more detail.', a: ['actually'], lv: 'A2' },
    { l: 'A', q: 'Feeling fear or worry.', a: ['afraid'], lv: 'A2' },
    { l: 'A', q: 'Once more; one more time.', a: ['again'], lv: 'A2' },

    // B Harfi
    { l: 'B', q: 'To act in a particular way.', a: ['behave'], lv: 'A2' },
    { l: 'B', q: 'Something you think is true.', a: ['belief'], lv: 'A2' },
    { l: 'B', q: 'A vehicle with two wheels that you pedal.', a: ['bicycle', 'bike'], lv: 'A2' },
    { l: 'B', q: 'In the middle of two things.', a: ['between'], lv: 'A2' },
    { l: 'B', q: 'The day on which someone was born.', a: ['birthday'], lv: 'A2' },
    { l: 'B', q: 'A sharp, strong taste like black coffee.', a: ['bitter'], lv: 'A2' },
    { l: 'B', q: 'To heat liquid until it bubbles.', a: ['boil'], lv: 'A2' },
    { l: 'B', q: 'The opposite of interesting.', a: ['boring'], lv: 'A2' },

    // C Harfi
    { l: 'C', q: 'A place where you watch films.', a: ['cinema'], lv: 'A2' },
    { l: 'C', q: 'To pick something from a group.', a: ['choose'], lv: 'A2' },
    { l: 'C', q: 'A person who buys goods or services.', a: ['customer'], lv: 'A2' },
    { l: 'C', q: 'The general weather of a place.', a: ['climate'], lv: 'A2' },
    { l: 'C', q: 'To make something tidy or pure.', a: ['clean'], lv: 'A2' },
    { l: 'C', q: 'A group of students learning together.', a: ['class'], lv: 'A2' },
    { l: 'C', q: 'To find the answer using numbers.', a: ['calculate'], lv: 'A2' },
    { l: 'C', q: 'A person you work with.', a: ['colleague'], lv: 'A2' },

    // D Harfi
    { l: 'D', q: 'Something that is hard to do.', a: ['difficult'], lv: 'A2' },
    { l: 'D', q: 'To arrive at a later time than expected.', a: ['delay'], lv: 'A2' },
    { l: 'D', q: 'A book that gives the meaning of words.', a: ['dictionary'], lv: 'A2' },
    { l: 'D', q: 'To go away or stop being seen.', a: ['disappear'], lv: 'A2' },
    { l: 'D', q: 'The last meal of the day.', a: ['dinner'], lv: 'A2' },
    { l: 'D', q: 'The opposite of wet.', a: ['dry'], lv: 'A2' },
    { l: 'D', q: 'To talk about something with others.', a: ['discuss'], lv: 'A2' },
    { l: 'D', q: 'A person whose job is to fix teeth.', a: ['dentist'], lv: 'A2' },

    // E Harfi
    { l: 'E', q: 'To get pleasure from something.', a: ['enjoy'], lv: 'A2' },
    { l: 'E', q: 'Something that is usual or common.', a: ['everyday'], lv: 'A2' },
    { l: 'E', q: 'A test of knowledge or skill.', a: ['exam', 'examination'], lv: 'A2' },
    { l: 'E', q: 'A way out of a building.', a: ['exit'], lv: 'A2' },
    { l: 'E', q: 'The planet where we live.', a: ['earth'], lv: 'A2' },
    { l: 'E', q: 'To make something clear to someone.', a: ['explain'], lv: 'A2' },
    { l: 'E', q: 'Something that costs a lot of money.', a: ['expensive'], lv: 'A2' },
    { l: 'E', q: 'A person who knows a lot about a subject.', a: ['expert'], lv: 'A2' },

    // F Harfi
    { l: 'F', q: 'Known by many people.', a: ['famous'], lv: 'A2' },
    { l: 'F', q: 'The cost of a trip on a bus or train.', a: ['fare'], lv: 'A2' },
    { l: 'F', q: 'To reach the end of a task.', a: ['finish'], lv: 'A2' },
    { l: 'F', q: 'To fail to remember.', a: ['forget'], lv: 'A2' },
    { l: 'F', q: 'To be scared of something.', a: ['frightened'], lv: 'A2' },
    { l: 'F', q: 'A person from another country.', a: ['foreigner'], lv: 'A2' },
    { l: 'F', q: 'A place where animals like cows live.', a: ['farm'], lv: 'A2' },
    { l: 'F', q: 'Something you like more than others.', a: ['favorite', 'favourite'], lv: 'A2' },

    // G Harfi
    { l: 'G', q: 'A person who is invited to a house.', a: ['guest'], lv: 'A2' },
    { l: 'G', q: 'To become more or larger.', a: ['grow'], lv: 'A2' },
    { l: 'G', q: 'A small present.', a: ['gift'], lv: 'A2' },
    { l: 'G', q: 'The study of the earth and countries.', a: ['geography'], lv: 'A2' },
    { l: 'G', q: 'A person whose job is to guide tourists.', a: ['guide'], lv: 'A2' },
    { l: 'G', q: 'To provide a reason or answer.', a: ['give'], lv: 'A2' },
    { l: 'G', q: 'To be happy or pleased.', a: ['glad'], lv: 'A2' },
    { l: 'G', q: 'A building where cars are kept.', a: ['garage'], lv: 'A2' },

    // H Harfi
    { l: 'H', q: 'Building for sick people.', a: ['hospital'], lv: 'A2' },
    { l: 'H', q: 'Something you do in your free time.', a: ['hobby'], lv: 'A2' },
    { l: 'H', q: 'Time away from work or school.', a: ['holiday'], lv: 'A2' },
    { l: 'H', q: 'To think something good will happen.', a: ['hope'], lv: 'A2' },
    { l: 'H', q: 'The state of your body and mind.', a: ['health'], lv: 'A2' },
    { l: 'H', q: 'Something that is not easy.', a: ['hard'], lv: 'A2' },
    { l: 'H', q: 'To take place.', a: ['happen'], lv: 'A2' },
    { l: 'H', q: 'To pay money to use something for a short time.', a: ['hire'], lv: 'A2' },

    // I Harfi
    { l: 'I', q: 'To be very keen on doing something.', a: ['interested'], lv: 'A2' },
    { l: 'I', q: 'To ask someone to come to a party.', a: ['invite'], lv: 'A2' },
    { l: 'I', q: 'An area of land surrounded by water.', a: ['island'], lv: 'A2' },
    { l: 'I', q: 'To make something better.', a: ['improve'], lv: 'A2' },
    { l: 'I', q: 'Something that cannot happen.', a: ['impossible'], lv: 'A2' },
    { l: 'I', q: 'A person who creates something new.', a: ['inventor'], lv: 'A2' },
    { l: 'I', q: 'The system of global computer networks.', a: ['internet'], lv: 'A2' },
    { l: 'I', q: 'Facts about a situation or person.', a: ['information'], lv: 'A2' },

    // J Harfi
    { l: 'J', q: 'A funny story.', a: ['joke'], lv: 'A2' },
    { l: 'J', q: 'Going from one place to another.', a: ['journey'], lv: 'A2' },
    { l: 'J', q: 'To become a part of a group.', a: ['join'], lv: 'A2' },
    { l: 'J', q: 'A type of expensive stone like a diamond.', a: ['jewel'], lv: 'A2' },
    { l: 'J', q: 'The person who decides who is right in a court.', a: ['judge'], lv: 'A2' },
    { l: 'J', q: 'The feeling of being very happy.', a: ['joy'], lv: 'A2' },
    { l: 'J', q: 'To keep many objects in the air at once.', a: ['juggle'], lv: 'A2' },
    { l: 'J', q: 'The largest planet in the solar system.', a: ['jupiter'], lv: 'A2' },

    // K Harfi
    { l: 'K', q: 'The part of your body where the leg bends.', a: ['knee'], lv: 'A2' },
    { l: 'K', q: 'To be friendly and helpful.', a: ['kind'], lv: 'A2' },
    { l: 'K', q: 'To strike a ball with your foot.', a: ['kick'], lv: 'A2' },
    { l: 'K', q: 'To have something and not give it away.', a: ['keep'], lv: 'A2' },
    { l: 'K', q: 'A small shop that sells papers or snacks.', a: ['kiosk'], lv: 'A2' },
    { l: 'K', q: 'The object with buttons used for typing.', a: ['keyboard'], lv: 'A2' },
    { l: 'K', q: 'A set of tools or equipment.', a: ['kit'], lv: 'A2' },
    { l: 'K', q: 'A baby goat.', a: ['kid'], lv: 'A2' },

    // L Harfi
    { l: 'L', q: 'Something that is not heavy.', a: ['light'], lv: 'A2' },
    { l: 'L', q: 'To make sounds because of a joke.', a: ['laugh'], lv: 'A2' },
    { l: 'L', q: 'A person who leads a group.', a: ['leader'], lv: 'A2' },
    { l: 'L', q: 'A story that people tell from a long time ago.', a: ['legend'], lv: 'A2' },
    { l: 'L', q: 'To get knowledge by studying.', a: ['learn'], lv: 'A2' },
    { l: 'L', q: 'The distance from one end to the other.', a: ['length'], lv: 'A2' },
    { l: 'L', q: 'Very beautiful or pleasant.', a: ['lovely'], lv: 'A2' },
    { l: 'L', q: 'The opposite of win.', a: ['lose'], lv: 'A2' },

    // M Harfi
    { l: 'M', q: 'To fix something that is broken.', a: ['mend'], lv: 'A2' },
    { l: 'M', q: 'A large building for old objects.', a: ['museum'], lv: 'A2' },
    { l: 'M', q: 'To see and talk to someone for the first time.', a: ['meet'], lv: 'A2' },
    { l: 'M', q: 'A person whose job is to fix cars.', a: ['mechanic'], lv: 'A2' },
    { l: 'M', q: 'A very large hill.', a: ['mountain'], lv: 'A2' },
    { l: 'M', q: 'A person who belongs to a club or group.', a: ['member'], lv: 'A2' },
    { l: 'M', q: 'The plural of man.', a: ['men'], lv: 'A2' },
    { l: 'M', q: 'To change position or go to a new house.', a: ['move'], lv: 'A2' },

    // N Harfi
    { l: 'N', q: 'A person who lives next door.', a: ['neighbor', 'neighbour'], lv: 'A2' },
    { l: 'N', q: 'The opposite of always.', a: ['never'], lv: 'A2' },
    { l: 'N', q: 'The head-body connection part.', a: ['neck'], lv: 'A2' },
    { l: 'N', q: 'Something that is needed.', a: ['necessary'], lv: 'A2' },
    { l: 'N', q: 'A report of recent events.', a: ['news'], lv: 'A2' },
    { l: 'N', q: 'A short letter or reminder.', a: ['note'], lv: 'A2' },
    { l: 'N', q: 'Neither good nor bad; usual.', a: ['normal'], lv: 'A2' },
    { l: 'N', q: 'To be worried or slightly afraid.', a: ['nervous'], lv: 'A2' },

    // O Harfi
    { l: 'O', q: 'The opposite of under.', a: ['over'], lv: 'A2' },
    { l: 'O', q: 'To happen or take place.', a: ['occur'], lv: 'A2' },
    { l: 'O', q: 'To have something that belongs to you.', a: ['own'], lv: 'A2' },
    { l: 'O', q: 'A person who works in an office.', a: ['officer'], lv: 'A2' },
    { l: 'O', q: 'A chance to do something.', a: ['opportunity'], lv: 'A2' },
    { l: 'O', q: 'A large bird that cannot fly.', a: ['ostrich'], lv: 'A2' },
    { l: 'O', q: 'The opposite of inside.', a: ['outside'], lv: 'A2' },
    { l: 'O', q: 'The color of a sunset.', a: ['orange'], lv: 'A2' },

    // P Harfi
    { l: 'P', q: 'A small animal kept for company.', a: ['pet'], lv: 'A2' },
    { l: 'P', q: 'To give money for something.', a: ['pay'], lv: 'A2' },
    { l: 'P', q: 'A flat dish for food.', a: ['plate'], lv: 'A2' },
    { l: 'P', q: 'To take part in a game or sport.', a: ['play'], lv: 'A2' },
    { l: 'P', q: 'A place where you catch a train.', a: ['platform'], lv: 'A2' },
    { l: 'P', q: 'A person who writes poems.', a: ['poet'], lv: 'A2' },
    { l: 'P', q: 'Something given to the winner of a race.', a: ['prize'], lv: 'A2' },
    { l: 'P', q: 'A person who flies a plane.', a: ['pilot'], lv: 'A2' },

    // Q Harfi
    { l: 'Q', q: 'Something you ask.', a: ['question'], lv: 'A2' },
    { l: 'Q', q: 'Not loud.', a: ['quiet'], lv: 'A2' },
    { l: 'Q', q: 'To stop doing a job or a game.', a: ['quit'], lv: 'A2' },
    { l: 'Q', q: 'A short test of knowledge.', a: ['quiz'], lv: 'A2' },
    { l: 'Q', q: 'Completely or very.', a: ['quite'], lv: 'A2' },
    { l: 'Q', q: 'A woman who rules.', a: ['queen'], lv: 'A2' },
    { l: 'Q', q: 'A line of people waiting.', a: ['queue'], lv: 'A2' },
    { l: 'Q', q: 'Doing something in a short time.', a: ['quick'], lv: 'A2' },

    // R Harfi
    { l: 'R', q: 'To go back to a place.', a: ['return'], lv: 'A2' },
    { l: 'R', q: 'A person who reports news.', a: ['reporter'], lv: 'A2' },
    { l: 'R', q: 'To remember or call back to mind.', a: ['recall'], lv: 'A2' },
    { l: 'R', q: 'A person who is running a race.', a: ['runner'], lv: 'A2' },
    { l: 'R', q: 'To get something you asked for.', a: ['receive'], lv: 'A2' },
    { l: 'R', q: 'A place where you eat.', a: ['restaurant'], lv: 'A2' },
    { l: 'R', q: 'A person who is in charge of a country.', a: ['ruler'], lv: 'A2' },
    { l: 'R', q: 'To look at words in a book.', a: ['read'], lv: 'A2' },

    // S Harfi
    { l: 'S', q: 'A large body of salt water.', a: ['sea'], lv: 'A2' },
    { l: 'S', q: 'To not leave a place.', a: ['stay'], lv: 'A2' },
    { l: 'S', q: 'To learn by reading or going to school.', a: ['study'], lv: 'A2' },
    { l: 'S', q: 'Something that is not difficult.', a: ['simple'], lv: 'A2' },
    { l: 'S', q: 'A time of year like Spring.', a: ['season'], lv: 'A2' },
    { l: 'S', q: 'To be certain about something.', a: ['sure'], lv: 'A2' },
    { l: 'S', q: 'A person who works on a boat.', a: ['sailor'], lv: 'A2' },
    { l: 'S', q: 'A place with many stars and planets.', a: ['space'], lv: 'A2' },

    // T Harfi
    { l: 'T', q: 'A person who helps people learn.', a: ['teacher'], lv: 'A2' },
    { l: 'T', q: 'To speak with someone.', a: ['talk'], lv: 'A2' },
    { l: 'T', q: 'To go from one place to another.', a: ['travel'], lv: 'A2' },
    { l: 'T', q: 'To get something from someone.', a: ['take'], lv: 'A2' },
    { l: 'T', q: 'A person who is not an adult yet.', a: ['teenager'], lv: 'A2' },
    { l: 'T', q: 'To give information by speaking.', a: ['tell'], lv: 'A2' },
    { l: 'T', q: 'Something that is not a lie.', a: ['truth'], lv: 'A2' },
    { l: 'T', q: 'A group of people playing a sport together.', a: ['team'], lv: 'A2' },

    // U Harfi
    { l: 'U', q: 'Something that is not usual.', a: ['unusual'], lv: 'A2' },
    { l: 'U', q: 'To comprehend.', a: ['understand'], lv: 'A2' },
    { l: 'U', q: 'A person who uses a computer.', a: ['user'], lv: 'A2' },
    { l: 'U', q: 'Below something.', a: ['under'], lv: 'A2' },
    { l: 'U', q: 'The brother of your parent.', a: ['uncle'], lv: 'A2' },
    { l: 'U', q: 'To employ a tool.', a: ['use'], lv: 'A2' },
    { l: 'U', q: 'Something that is not kind.', a: ['unkind'], lv: 'A2' },
    { l: 'U', q: 'The world and everything in it.', a: ['universe'], lv: 'A2' },

    // V Harfi
    { l: 'V', q: 'To go and see a person or place.', a: ['visit'], lv: 'A2' },
    { l: 'V', q: 'A small town in the country.', a: ['village'], lv: 'A2' },
    { l: 'V', q: 'The sound you make when talking.', a: ['voice'], lv: 'A2' },
    { l: 'V', q: 'A machine used for transport.', a: ['vehicle'], lv: 'A2' },
    { l: 'V', q: 'Food like a carrot.', a: ['vegetable'], lv: 'A2' },
    { l: 'V', q: 'A person who does not eat meat.', a: ['vegetarian'], lv: 'A2' },
    { l: 'V', q: 'Something that is very important.', a: ['valuable'], lv: 'A2' },
    { l: 'V', q: 'The opposite of a hero.', a: ['villain'], lv: 'A2' },

    // W Harfi
    { l: 'W', q: 'A device on your wrist to tell time.', a: ['watch'], lv: 'A2' },
    { l: 'W', q: 'To move slowly on feet.', a: ['walk'], lv: 'A2' },
    { l: 'W', q: 'To feel anxious about a problem.', a: ['worry'], lv: 'A2' },
    { l: 'W', q: 'The opposite of strong.', a: ['weak'], lv: 'A2' },
    { l: 'W', q: 'To get a prize in a game.', a: ['win'], lv: 'A2' },
    { l: 'W', q: 'A person who serves food.', a: ['waiter'], lv: 'A2' },
    { l: 'W', q: 'A place with many trees.', a: ['wood', 'woods'], lv: 'A2' },
    { l: 'W', q: 'The day of the week after Tuesday.', a: ['wednesday'], lv: 'A2' },

    // Y Harfi
    { l: 'Y', q: 'Twelve months.', a: ['year'], lv: 'A2' },
    { l: 'Y', q: 'The opposite of old.', a: ['young'], lv: 'A2' },
    { l: 'Y', q: 'The color of a lemon.', a: ['yellow'], lv: 'A2' },
    { l: 'Y', q: 'The day before today.', a: ['yesterday'], lv: 'A2' },
    { l: 'Y', q: 'A creamy milk food.', a: ['yogurt'], lv: 'A2' },
    { l: 'Y', q: 'Something you say to show you agree.', a: ['yes'], lv: 'A2' },
    { l: 'Y', q: 'To shout loudly.', a: ['yell'], lv: 'A2' },
    { l: 'Y', q: 'At some time in the future; not now.', a: ['yet'], lv: 'A2' },

    // Z Harfi
    { l: 'Z', q: 'The number after -1.', a: ['zero'], lv: 'A2' },
    { l: 'Z', q: 'A striped animal.', a: ['zebra'], lv: 'A2' },
    { l: 'Z', q: 'To move very fast.', a: ['zoom'], lv: 'A2' },
    { l: 'Z', q: 'A place for wild animals.', a: ['zoo'], lv: 'A2' },
    { l: 'Z', q: 'It closes your coat.', a: ['zip'], lv: 'A2' },
    { l: 'Z', q: 'A specific area in a city.', a: ['zone'], lv: 'A2' },
    { l: 'Z', q: 'A line with many sharp turns.', a: ['zigzag'], lv: 'A2' },
    { l: 'Z', q: 'A walking dead person.', a: ['zombie'], lv: 'A2' }
];

const b1Words = [
    // A Harfi
    { l: 'A', q: 'A feeling of great surprise or wonder.', a: ['amazement'], lv: 'B1' },
    { l: 'A', q: 'To succeed in reaching a particular goal.', a: ['attain'], lv: 'B1' },
    { l: 'A', q: 'Able to be used or obtained.', a: ['available'], lv: 'B1' },
    { l: 'A', q: 'To stay away from someone or something.', a: ['avoid'], lv: 'B1' },
    { l: 'A', q: 'To change something to suit different conditions.', a: ['adapt'], lv: 'B1' },
    { l: 'A', q: 'Sufficient or enough for a purpose.', a: ['adequate'], lv: 'B1' },
    { l: 'A', q: 'To suggest or call attention to indirectly.', a: ['allude'], lv: 'B1' },
    { l: 'A', q: 'To recognize or admit the existence of something.', a: ['acknowledge'], lv: 'B1' },

    // B Harfi
    { l: 'B', q: 'A professional who cuts and styles men\'s hair.', a: ['barber'], lv: 'B1' },
    { l: 'B', q: 'To receive something with the intent to return it.', a: ['borrow'], lv: 'B1' },
    { l: 'B', q: 'Cruel or very unpleasant.', a: ['brutal'], lv: 'B1' },
    { l: 'B', q: 'The amount of money you can spend.', a: ['budget'], lv: 'B1' },
    { l: 'B', q: 'A person whose job is to sell meat.', a: ['butcher'], lv: 'B1' },
    { l: 'B', q: 'Underneath or at a lower level.', a: ['beneath'], lv: 'B1' },
    { l: 'B', q: 'To puzzle or confuse someone.', a: ['bewilder'], lv: 'B1' },
    { l: 'B', q: 'Lasting for only a short time.', a: ['brief'], lv: 'B1' },

    // C Harfi
    { l: 'C', q: 'A situation that tests someone\'s abilities.', a: ['challenge'], lv: 'B1' }, // "Color" yerine güncellendi
    { l: 'C', q: 'To make someone feel better in a time of grief.', a: ['comfort'], lv: 'B1' },
    { l: 'C', q: 'To think about something carefully.', a: ['consider'], lv: 'B1' },
    { l: 'C', q: 'To give money or help for a specific purpose.', a: ['contribute'], lv: 'B1' },
    { l: 'C', q: 'The total amount that can be contained.', a: ['capacity'], lv: 'B1' }, // "Climate" yerine güncellendi
    { l: 'C', q: 'To finish or bring to an end.', a: ['conclude'], lv: 'B1' },
    { l: 'C', q: 'To consist of or be made up of.', a: ['comprise'], lv: 'B1' },
    { l: 'C', q: 'A formal meeting for discussion.', a: ['conference'], lv: 'B1' },

    // D Harfi
    { l: 'D', q: 'The exact meaning of a word.', a: ['definition'], lv: 'B1' },
    { l: 'D', q: 'To decide or settle on something finally.', a: ['determine'], lv: 'B1' },
    { l: 'D', q: 'To make something better or more advanced.', a: ['develop'], lv: 'B1' },
    { l: 'D', q: 'A situation where things happen later than planned.', a: ['delay'], lv: 'B1' },
    { l: 'D', q: 'A small part or item of something.', a: ['detail'], lv: 'B1' },
    { l: 'D', q: 'Clearly separate or different from others.', a: ['distinct'], lv: 'B1' }, // "Dentist" yerine güncellendi
    { l: 'D', q: 'A state of being not easy to solve or do.', a: ['difficulty'], lv: 'B1' },
    { l: 'D', q: 'To put something into a liquid.', a: ['dip'], lv: 'B1' },

    // E Harfi
    { l: 'E', q: 'The air, water, and land in which people live.', a: ['environment'], lv: 'B1' },
    { l: 'E', q: 'Ready to do something; enthusiastic.', a: ['eager'], lv: 'B1' },
    { l: 'E', q: 'Money that you earn from working.', a: ['earnings'], lv: 'B1' },
    { l: 'E', q: 'To make something happen or exist.', a: ['effect'], lv: 'B1' },
    { l: 'E', q: 'To select or choose someone by voting.', a: ['elect'], lv: 'B1' },
    { l: 'E', q: 'Something that is necessary or basic.', a: ['essential'], lv: 'B1' },
    { l: 'E', q: 'To look at something closely.', a: ['examine'], lv: 'B1' },
    { l: 'E', q: 'To display or show in public.', a: ['exhibit'], lv: 'B1' },

    // F Harfi
    { l: 'F', q: 'Information about a person\'s performance.', a: ['feedback'], lv: 'B1' },
    { l: 'F', q: 'Very well-known by many people.', a: ['famous'], lv: 'B1' },
    { l: 'F', q: 'To do with money or how it is managed.', a: ['financial'], lv: 'B1' },
    { l: 'F', q: 'A border or case that goes around a picture.', a: ['frame'], lv: 'B1' },
    { l: 'F', q: 'The ability to speak a language easily.', a: ['fluency'], lv: 'B1' },
    { l: 'F', q: 'To create or establish something.', a: ['form'], lv: 'B1' },
    { l: 'F', q: 'To predict what will happen.', a: ['forecast'], lv: 'B1' },
    { l: 'F', q: 'A person who is an enemy.', a: ['foe'], lv: 'B1' },

    // G Harfi
    { l: 'G', q: 'Willing to give more money or help.', a: ['generous'], lv: 'B1' },
    { l: 'G', q: 'To promise that something will happen.', a: ['guarantee'], lv: 'B1' },
    { l: 'G', q: 'The surface of the earth.', a: ['ground'], lv: 'B1' },
    { l: 'G', q: 'To understand something quickly.', a: ['grasp'], lv: 'B1' },
    { l: 'G', q: 'To feel sorry or unhappy about something.', a: ['grieve'], lv: 'B1' },
    { l: 'G', q: 'A person who protects a place.', a: ['guard'], lv: 'B1' },
    { l: 'G', q: 'A physical movement of the hand or body.', a: ['gesture'], lv: 'B1' },
    { l: 'G', q: 'General or not specific.', a: ['generic'], lv: 'B1' },

    // H Harfi
    { l: 'H', q: 'A place where ships can stay.', a: ['harbor', 'harbour'], lv: 'B1' },
    { l: 'H', q: 'To be unsure or wait before acting.', a: ['hesitate'], lv: 'B1' },
    { l: 'H', q: 'Something that is very difficult to endure.', a: ['hardship'], lv: 'B1' },
    { l: 'H', q: 'The distance from the bottom to the top.', a: ['height'], lv: 'B1' },
    { l: 'H', q: 'A person who is brave.', a: ['hero'], lv: 'B1' },
    { l: 'H', q: 'To show great respect for someone.', a: ['honor', 'honour'], lv: 'B1' },
    { l: 'H', q: 'To keep something away from others.', a: ['hide'], lv: 'B1' },
    { l: 'H', q: 'Extremely large.', a: ['huge'], lv: 'B1' },

    // I Harfi (Düzeltildi)
    { l: 'I', q: 'To make something better than it was.', a: ['improve'], lv: 'B1' },
    { l: 'I', q: 'To tell someone they should do something.', a: ['instruct'], lv: 'B1' },
    { l: 'I', q: 'To suggest something without saying it directly.', a: ['imply'], lv: 'B1' },
    { l: 'I', q: 'To include something as part of a group.', a: ['incorporate'], lv: 'B1' },
    { l: 'I', q: 'Something that is not dependent.', a: ['independent'], lv: 'B1' },
    { l: 'I', q: 'To have an effect on someone.', a: ['influence'], lv: 'B1' },
    { l: 'I', q: 'To start something new.', a: ['initiate'], lv: 'B1' },
    { l: 'I', q: 'To look into something carefully.', a: ['investigate'], lv: 'B1' },

    // J Harfi (Düzeltildi)
    { l: 'J', q: 'A person whose job is to report news.', a: ['journalist'], lv: 'B1' },
    { l: 'J', q: 'A trip from one place to another.', a: ['journey'], lv: 'B1' },
    { l: 'J', q: 'To give a reason or excuse for something.', a: ['justify'], lv: 'B1' },
    { l: 'J', q: 'A person who decides in a court of law.', a: ['judge'], lv: 'B1' },
    { l: 'J', q: 'A place where two things meet.', a: ['joint'], lv: 'B1' },
    { l: 'J', q: 'The feeling of being very happy.', a: ['joy'], lv: 'B1' },
    { l: 'J', q: 'Fairness in the way people are treated.', a: ['justice'], lv: 'B1' },
    { l: 'J', q: 'A coat or a light coat.', a: ['jacket'], lv: 'B1' }, // "July" yerine güncellendi

    // K Harfi
    { l: 'K', q: 'To continue to have or hold something.', a: ['keep'], lv: 'B1' },
    { l: 'K', q: 'A person who is famous for their skill.', a: ['knight'], lv: 'B1' },
    { l: 'K', q: 'The quality of being generous and helpful.', a: ['kindness'], lv: 'B1' },
    { l: 'K', q: 'A small house for a dog.', a: ['kennel'], lv: 'B1' },
    { l: 'K', q: 'To take someone away by force.', a: ['kidnap'], lv: 'B1' }, // "Kin" yerine güncellendi
    { l: 'K', q: 'A set of tools for a specific purpose.', a: ['kit'], lv: 'B1' },
    { l: 'K', q: 'Very central or important.', a: ['key'], lv: 'B1' }, // "Kindling" yerine güncellendi
    { l: 'K', q: 'The understanding of a subject.', a: ['knowledge'], lv: 'B1' },

    // L Harfi
    { l: 'L', q: 'A place for scientific experiments.', a: ['laboratory', 'lab'], lv: 'B1' },
    { l: 'L', q: 'A person who owns a building.', a: ['landlord'], lv: 'B1' },
    { l: 'L', q: 'A person whose job is to represent people in law.', a: ['lawyer'], lv: 'B1' },
    { l: 'L', q: 'To provide money with the intent to be paid back.', a: ['lend'], lv: 'B1' },
    { l: 'L', q: 'To give someone the authority to do something.', a: ['license', 'licence'], lv: 'B1' },
    { l: 'L', q: 'Time when you are not working.', a: ['leisure'], lv: 'B1' }, // "Lifer" yerine güncellendi
    { l: 'L', q: 'Something that is expected to happen.', a: ['likely'], lv: 'B1' },
    { l: 'L', q: 'To be in a specific position.', a: ['locate'], lv: 'B1' },

    // M Harfi
    { l: 'M', q: 'A person whose job is to work in a mine.', a: ['miner'], lv: 'B1' },
    { l: 'M', q: 'A person who handles a business.', a: ['manager'], lv: 'B1' },
    { l: 'M', q: 'Something that is very impressive.', a: ['magnificent'], lv: 'B1' },
    { l: 'M', q: 'To keep something in the same state.', a: ['maintain'], lv: 'B1' },
    { l: 'M', q: 'A person who is the head of a city.', a: ['mayor'], lv: 'B1' },
    { l: 'M', q: 'To have a specific significance.', a: ['mean'], lv: 'B1' },
    { l: 'M', q: 'A way of doing something.', a: ['method'], lv: 'B1' },
    { l: 'M', q: 'The ability to remember things.', a: ['memory'], lv: 'B1' },

    // N Harfi
    { l: 'N', q: 'To not take sides in an argument.', a: ['neutral'], lv: 'B1' },
    { l: 'N', q: 'A person who lives next door.', a: ['neighbor', 'neighbour'], lv: 'B1' },
    { l: 'N', q: 'To notice or write down something.', a: ['note'], lv: 'B1' },
    { l: 'N', q: 'What is expected or standard.', a: ['normal'], lv: 'B1' },
    { l: 'N', q: 'A long story in a book.', a: ['novel'], lv: 'B1' },
    { l: 'N', q: 'A person trained to care for the sick.', a: ['nurse'], lv: 'B1' },
    { l: 'N', q: 'At no time.', a: ['never'], lv: 'B1' },
    { l: 'N', q: 'The state of being slightly afraid.', a: ['nervous'], lv: 'B1' },

    // O Harfi
    { l: 'O', q: 'To happen or take place.', a: ['occur'], lv: 'B1' },
    { l: 'O', q: 'To suggest a plan or idea.', a: ['offer'], lv: 'B1' },
    { l: 'O', q: 'To be in control of a space.', a: ['occupy'], lv: 'B1' },
    { l: 'O', q: 'To provide a point of view.', a: ['opinion'], lv: 'B1' },
    { l: 'O', q: 'To go against a decision or idea.', a: ['oppose'], lv: 'B1' },
    { l: 'O', q: 'A chance to do something.', a: ['opportunity'], lv: 'B1' },
    { l: 'O', q: 'Something that is typical or regular.', a: ['ordinary'], lv: 'B1' },
    { l: 'O', q: 'To set something in a specific order.', a: ['organize', 'organise'], lv: 'B1' },

    // P Harfi
    { l: 'P', q: 'A person receiving medical treatment.', a: ['patient'], lv: 'B1' },
    { l: 'P', q: 'To think something is true without proof.', a: ['presume'], lv: 'B1' },
    { l: 'P', q: 'To keep something in its original state.', a: ['preserve'], lv: 'B1' },
    { l: 'P', q: 'To say that something will happen later.', a: ['predict'], lv: 'B1' },
    { l: 'P', q: 'To carry out an action or achievement.', a: ['perform'], lv: 'B1' },
    { l: 'P', q: 'To cause someone to do something immediately.', a: ['prompt'], lv: 'B1' },
    { l: 'P', q: 'The reason why something is done.', a: ['purpose'], lv: 'B1' },
    { l: 'P', q: 'A person involved in government.', a: ['politician'], lv: 'B1' },

    // Q Harfi
    { l: 'Q', q: 'The standard or level of something.', a: ['quality'], lv: 'B1' },
    { l: 'Q', q: 'A certain amount of something.', a: ['quantity'], lv: 'B1' },
    { l: 'Q', q: 'To have the right skills for a job.', a: ['qualify'], lv: 'B1' },
    { l: 'Q', q: 'To repeat the exact words of another.', a: ['quote'], lv: 'B1' },
    { l: 'Q', q: 'To stop a job or activity.', a: ['quit'], lv: 'B1' },
    { l: 'Q', q: 'Making very little or no noise.', a: ['quiet'], lv: 'B1' },
    { l: 'Q', q: 'A short test.', a: ['quiz'], lv: 'B1' },
    { l: 'Q', q: 'A question or doubt about something.', a: ['query'], lv: 'B1' },

    // R Harfi
    { l: 'R', q: 'To accept something as true.', a: ['recognize', 'recognise'], lv: 'B1' },
    { l: 'R', q: 'To make something smaller.', a: ['reduce'], lv: 'B1' },
    { l: 'R', q: 'To speak about someone or something briefly.', a: ['refer'], lv: 'B1' },
    { l: 'R', q: 'To show something that was hidden.', a: ['reveal'], lv: 'B1' },
    { l: 'R', q: 'To think about something carefully.', a: ['reflect'], lv: 'B1' },
    { l: 'R', q: 'To say no to something.', a: ['refuse'], lv: 'B1' },
    { l: 'R', q: 'To have a connection with something.', a: ['relate'], lv: 'B1' },
    { l: 'R', q: 'To help someone feel less worried.', a: ['relieve'], lv: 'B1' },

    // S Harfi
    { l: 'S', q: 'A person who works for another in their house.', a: ['servant'], lv: 'B1' },
    { l: 'S', q: 'To pick something from a group.', a: ['select'], lv: 'B1' },
    { l: 'S', q: 'A method to achieve a goal.', a: ['strategy'], lv: 'B1' },
    { l: 'S', q: 'To be enough for a purpose.', a: ['suffice'], lv: 'B1' },
    { l: 'S', q: 'To think that something is true.', a: ['suppose'], lv: 'B1' },
    { l: 'S', q: 'To overcome a difficulty.', a: ['surmount'], lv: 'B1' },
    { l: 'S', q: 'To maintain or keep something going.', a: ['sustain'], lv: 'B1' },
    { l: 'S', q: 'A person who watches an event.', a: ['spectator'], lv: 'B1' },

    // T Harfi
    { l: 'T', q: 'A large road vehicle.', a: ['truck'], lv: 'B1' },
    { l: 'T', q: 'To aim at a specific goal.', a: ['target'], lv: 'B1' },
    { l: 'T', q: 'A specific subject of discussion.', a: ['topic'], lv: 'B1' },
    { l: 'T', q: 'To move something from one place to another.', a: ['transfer'], lv: 'B1' },
    { l: 'T', q: 'To change something into another form.', a: ['transform'], lv: 'B1' },
    { l: 'T', q: 'To send something through the air or wires.', a: ['transmit'], lv: 'B1' },
    { l: 'T', q: 'A typical quality or feature.', a: ['trait'], lv: 'B1' },
    { l: 'T', q: 'A small amount of something.', a: ['trace'], lv: 'B1' },

    // U Harfi
    { l: 'U', q: 'To comprehend the meaning of something.', a: ['understand'], lv: 'B1' },
    { l: 'U', q: 'To make something more modern.', a: ['upgrade'], lv: 'B1' },
    { l: 'U', q: 'To stress the importance of an idea.', a: ['underline'], lv: 'B1' },
    { l: 'U', q: 'To agree to do a difficult task.', a: ['undertake'], lv: 'B1' },
    { l: 'U', q: 'To support a law or decision.', a: ['uphold'], lv: 'B1' },
    { l: 'U', q: 'Related to a city area.', a: ['urban'], lv: 'B1' },
    { l: 'U', q: 'Something that needs immediate attention.', a: ['urgent'], lv: 'B1' },
    { l: 'U', q: 'To use something effectively.', a: ['utilize', 'utilise'], lv: 'B1' },

    // V Harfi
    { l: 'V', q: 'Someone who offers to work for no pay.', a: ['volunteer'], lv: 'B1' },
    { l: 'V', q: 'Something that is empty.', a: ['vacant'], lv: 'B1' },
    { l: 'V', q: 'To check if something is true.', a: ['verify'], lv: 'B1' },
    { l: 'V', q: 'A person who has been hurt.', a: ['victim'], lv: 'B1' },
    { l: 'V', q: 'The way someone sees a situation.', a: ['viewpoint'], lv: 'B1' },
    { l: 'V', q: 'Something that is extremely important.', a: ['vital'], lv: 'B1' },
    { l: 'V', q: 'The amount of space something takes up.', a: ['volume'], lv: 'B1' },
    { l: 'V', q: 'A long journey by sea.', a: ['voyage'], lv: 'B1' },

    // W Harfi
    { l: 'W', q: 'A person who sees an event happen.', a: ['witness'], lv: 'B1' },
    { l: 'W', q: 'Having a lot of money.', a: ['wealthy'], lv: 'B1' },
    { l: 'W', q: 'A tool used for fighting.', a: ['weapon'], lv: 'B1' },
    { l: 'W', q: 'To feel anxious about potential problems.', a: ['worry'], lv: 'B1' },
    { l: 'W', q: 'A person who is smart or has experience.', a: ['wise'], lv: 'B1' },
    { l: 'W', q: 'To move a hand back and forth.', a: ['wave'], lv: 'B1' },
    { l: 'W', q: 'The state of the atmosphere.', a: ['weather'], lv: 'B1' },
    { l: 'W', q: 'Being prepared to do something.', a: ['willing'], lv: 'B1' },

    // Y Harfi
    { l: 'Y', q: 'The yellow part of an egg.', a: ['yolk'], lv: 'B1' },
    { l: 'Y', q: 'A measurement of length.', a: ['yard'], lv: 'B1' },
    { l: 'Y', q: 'To produce or provide a result.', a: ['yield'], lv: 'B1' },
    { l: 'Y', q: 'To shout loudly.', a: ['yell'], lv: 'B1' },
    { l: 'Y', q: 'The time it takes for Earth to circle the Sun.', a: ['year'], lv: 'B1' },
    { l: 'Y', q: 'Referring to the period of being young.', a: ['youth'], lv: 'B1' },
    { l: 'Y', q: 'A creamy milk product.', a: ['yogurt', 'yoghurt'], lv: 'B1' },
    { l: 'Y', q: 'To want something very much.', a: ['yearn'], lv: 'B1' },

    // Z Harfi
    { l: 'Z', q: 'Great energy or enthusiasm.', a: ['zeal'], lv: 'B1' },
    { l: 'Z', q: 'To focus on something or move fast.', a: ['zoom'], lv: 'B1' },
    { l: 'Z', q: 'A specific region or area.', a: ['zone'], lv: 'B1' },
    { l: 'Z', q: 'A device used to fasten clothes.', a: ['zip', 'zipper'], lv: 'B1' }, // "Zenith" yerine güncellendi
    { l: 'Z', q: 'A striped animal.', a: ['zebra'], lv: 'B1' },
    { l: 'Z', q: 'The number representing nothing.', a: ['zero'], lv: 'B1' },
    { l: 'Z', q: 'A shape with sharp angles.', a: ['zigzag'], lv: 'B1' },
    { l: 'Z', q: 'A great interest or excitement.', a: ['zest'], lv: 'B1' }
];

window.allWords = [...a1Words, ...a2Words, ...b1Words];
