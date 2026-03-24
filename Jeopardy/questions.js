// Jeopardy Questions - LDS Youth Activity Night (Boys 12-18)
// Each game randomly picks 6 categories from this full list.
// Each category has 3 difficulty levels with 5 questions each.
//   easy   → Ages 12–14
//   medium → Ages 14–16
//   hard   → Ages 16–18

const ALL_CATEGORIES = [

  // ── 1. SCRIPTURE KNOWLEDGE ────────────────────────────────────────────────
  {
    name: "Scripture Knowledge",
    questions: {
      easy: [
        { value: 200,  q: "Lehi's family left this city at the very beginning of the Book of Mormon.", a: "What is Jerusalem?" },
        { value: 400,  q: "Jesus was born in this city, where He lay in a manger.", a: "What is Bethlehem?" },
        { value: 600,  q: "Nephi built this vessel to carry his family across the ocean to the promised land.", a: "What is a ship?" },
        { value: 800,  q: "This man was commanded by God to build a large wooden ark to survive a great flood.", a: "Who is Noah?" },
        { value: 1000, q: "The first book of the Bible.", a: "What is Genesis?" }
      ],
      medium: [
        { value: 200,  q: "The first book of the Book of Mormon.", a: "What is 1 Nephi?" },
        { value: 400,  q: "This prophet in the Book of Mormon had a vision of the tree of life.", a: "Who is Lehi (or Nephi)?" },
        { value: 600,  q: "The Sermon on the Mount is found in this book of the New Testament.", a: "What is Matthew?" },
        { value: 800,  q: "The translation of the Book of Mormon was set back when this man lost 116 manuscript pages.", a: "Who is Martin Harris?" },
        { value: 1000, q: "These are the three witnesses to the Book of Mormon plates.", a: "Who are Oliver Cowdery, Martin Harris, and David Whitmer?" }
      ],
      hard: [
        { value: 200,  q: "This Book of Mormon prophet warned King Noah and was burned at the stake for his testimony.", a: "Who is Abinadi?" },
        { value: 400,  q: "The New Testament epistle that contains the famous teaching 'faith without works is dead.'", a: "What is James?" },
        { value: 600,  q: "The Doctrine and Covenants section number that contains the Word of Wisdom.", a: "What is section 89?" },
        { value: 800,  q: "According to 1 Nephi 1:4, Lehi left Jerusalem in approximately this year BC.", a: "What is 600 BC?" },
        { value: 1000, q: "These two disciples — one from the New Testament, two from the Book of Mormon — were translated and continue to minister on the earth.", a: "Who are John the Beloved and the Three Nephites?" }
      ]
    }
  },

  // ── 2. CHURCH HISTORY ─────────────────────────────────────────────────────
  {
    name: "Church History",
    questions: {
      easy: [
        { value: 200,  q: "The Church of Jesus Christ of Latter-day Saints was officially organized in this year.", a: "What is 1830?" },
        { value: 400,  q: "Joseph Smith prayed in a grove of trees and was visited by Heavenly Father and Jesus Christ in this event.", a: "What is the First Vision?" },
        { value: 600,  q: "Pioneer Saints crossed the plains and eventually settled in this state.", a: "What is Utah?" },
        { value: 800,  q: "The world headquarters of the Church is located in this city.", a: "What is Salt Lake City?" },
        { value: 1000, q: "This angel appeared to Joseph Smith multiple times and directed him to the gold plates.", a: "Who is Moroni?" }
      ],
      medium: [
        { value: 200,  q: "The Church of Jesus Christ of Latter-day Saints was officially organized in this year.", a: "What is 1830?" },
        { value: 400,  q: "Joseph Smith said his First Vision occurred in this place.", a: "What is the Sacred Grove?" },
        { value: 600,  q: "Pioneer Saints crossed the plains pulling these human-powered vehicles.", a: "What are handcarts?" },
        { value: 800,  q: "The Nauvoo Temple was located in this state.", a: "What is Illinois?" },
        { value: 1000, q: "This angel visited Joseph Smith and told him where to find the gold plates.", a: "Who is Moroni?" }
      ],
      hard: [
        { value: 200,  q: "Joseph Smith organized the Church in this state.", a: "What is New York?" },
        { value: 400,  q: "The Restoration's founding scriptural account, Joseph Smith—History, is found in this standard work.", a: "What is the Pearl of Great Price?" },
        { value: 600,  q: "Joseph and Hyrum Smith were murdered at this building in 1844.", a: "What is Carthage Jail?" },
        { value: 800,  q: "The Church was formally organized at the home of this man in Fayette, New York.", a: "Who is Peter Whitmer Sr.?" },
        { value: 1000, q: "The Nauvoo Expositor newspaper, which Joseph Smith ordered destroyed, was published by these dissidents led by William Law.", a: "Who are the dissenters (or William Law and associates)?" }
      ]
    }
  },

  // ── 3. SPORTS ─────────────────────────────────────────────────────────────
  {
    name: "Sports",
    questions: {
      easy: [
        { value: 200,  q: "The sport played on a diamond with bases and a pitcher.", a: "What is baseball?" },
        { value: 400,  q: "In basketball, shots made from beyond this line are worth three points.", a: "What is the three-point line (or arc)?" },
        { value: 600,  q: "Michael Jordan won six championships with this NBA team.", a: "What is the Chicago Bulls?" },
        { value: 800,  q: "The Super Bowl is the championship game of this professional sports league.", a: "What is the NFL (or American football)?" },
        { value: 1000, q: "A hole-in-one occurs in this sport.", a: "What is golf?" }
      ],
      medium: [
        { value: 200,  q: "The number of players per team on a basketball court at one time.", a: "What is 5?" },
        { value: 400,  q: "A perfect score in a single game of bowling.", a: "What is 300?" },
        { value: 600,  q: "This BYU quarterback won the Heisman Trophy in 1990.", a: "Who is Ty Detmer?" },
        { value: 800,  q: "The Utah Jazz has retired the jersey numbers of these two legendary players.", a: "Who are Karl Malone and John Stockton?" },
        { value: 1000, q: "In American football, a player scores this many points for a touchdown.", a: "What is 6?" }
      ],
      hard: [
        { value: 200,  q: "The only country to win the FIFA World Cup five times.", a: "What is Brazil?" },
        { value: 400,  q: "Before becoming Muhammad Ali, this boxing champion was known by this birth name.", a: "Who is Cassius Clay?" },
        { value: 600,  q: "As of 2024, this tennis player holds the record for the most men's Grand Slam singles titles with 24.", a: "Who is Novak Djokovic?" },
        { value: 800,  q: "The annual horse race known as the 'Run for the Roses,' held in Louisville, Kentucky.", a: "What is the Kentucky Derby?" },
        { value: 1000, q: "In February 2023, this NBA player surpassed Kareem Abdul-Jabbar to become the all-time leading scorer in NBA history.", a: "Who is LeBron James?" }
      ]
    }
  },

  // ── 4. SCIENCE & TECH ────────────────────────────────────────────────────
  {
    name: "Science & Tech",
    questions: {
      easy: [
        { value: 200,  q: "The planet with a famous ring system around it.", a: "What is Saturn?" },
        { value: 400,  q: "H₂O is the chemical formula for this everyday liquid.", a: "What is water?" },
        { value: 600,  q: "This organ in your chest pumps blood through your body.", a: "What is the heart?" },
        { value: 800,  q: "The force that pulls objects toward the ground.", a: "What is gravity?" },
        { value: 1000, q: "This scientist is famous for the theory of relativity and the equation E=mc².", a: "Who is Albert Einstein?" }
      ],
      medium: [
        { value: 200,  q: "The planet closest to the sun.", a: "What is Mercury?" },
        { value: 400,  q: "This popular programming language is named after a type of coffee.", a: "What is Java?" },
        { value: 600,  q: "Water boils at this temperature in Fahrenheit at sea level.", a: "What is 212 degrees?" },
        { value: 800,  q: "The force that keeps planets in orbit around the sun.", a: "What is gravity?" },
        { value: 1000, q: "This chemical element has the atomic number 79 and the symbol Au.", a: "What is gold?" }
      ],
      hard: [
        { value: 200,  q: "The smallest bone in the human body, found deep inside the ear.", a: "What is the stapes?" },
        { value: 400,  q: "The speed of light in a vacuum is approximately this many miles per second.", a: "What is 186,000 miles per second?" },
        { value: 600,  q: "This element is the most abundant metal in Earth's crust.", a: "What is aluminum?" },
        { value: 800,  q: "This branch of physics studies the behavior of matter and energy at the smallest possible scales.", a: "What is quantum mechanics?" },
        { value: 1000, q: "The number of chromosomes found in a typical human cell.", a: "What is 46?" }
      ]
    }
  },

  // ── 5. MOVIES & POP CULTURE ───────────────────────────────────────────────
  {
    name: "Movies & Pop Culture",
    questions: {
      easy: [
        { value: 200,  q: "This Disney princess lives with seven dwarfs in the forest.", a: "Who is Snow White?" },
        { value: 400,  q: "In Star Wars, Darth Vader tells Luke Skywalker, 'I am your ___.'", a: "What is father?" },
        { value: 600,  q: "The name of the cowboy toy in Toy Story.", a: "Who is Woody?" },
        { value: 800,  q: "This superhero's secret identity is Bruce Wayne.", a: "Who is Batman?" },
        { value: 1000, q: "Simba is the young lion hero of this Disney animated classic.", a: "What is The Lion King?" }
      ],
      medium: [
        { value: 200,  q: "This Marvel superhero fights crime in a suit of iron.", a: "Who is Iron Man (Tony Stark)?" },
        { value: 400,  q: "In this Pixar film, toys secretly come to life when humans aren't watching.", a: "What is Toy Story?" },
        { value: 600,  q: "Jack Black played Steve in this 2025 video-game movie.", a: "What is A Minecraft Movie?" },
        { value: 800,  q: "This Pixar film features a family with superpowers who are told to keep them hidden.", a: "What is The Incredibles?" },
        { value: 1000, q: "This young wizard has a lightning bolt-shaped scar on his forehead.", a: "Who is Harry Potter?" }
      ],
      hard: [
        { value: 200,  q: "The actor who provided the iconic voice of Darth Vader in the original Star Wars trilogy.", a: "Who is James Earl Jones?" },
        { value: 400,  q: "This film won the very first Academy Award for Best Animated Feature at the 2002 ceremony.", a: "What is Shrek?" },
        { value: 600,  q: "Robert Downey Jr. played this character across 10 films in the Marvel Cinematic Universe.", a: "Who is Iron Man (Tony Stark)?" },
        { value: 800,  q: "'I am inevitable' and 'I am Iron Man' are the climactic lines of this 2019 Marvel film.", a: "What is Avengers: Endgame?" },
        { value: 1000, q: "The fictional sport played on broomsticks in the Harry Potter universe.", a: "What is Quidditch?" }
      ]
    }
  },

  // ── 6. LDS FOR THE WIN ───────────────────────────────────────────────────
  {
    name: "LDS For the Win",
    questions: {
      easy: [
        { value: 200,  q: "We are children of our Heavenly ___.", a: "What is Father?" },
        { value: 400,  q: "This book of scripture was translated by Joseph Smith from gold plates.", a: "What is the Book of Mormon?" },
        { value: 600,  q: "Young men in the Church typically begin serving full-time missions at this age.", a: "What is 18?" },
        { value: 800,  q: "Church members gather each Sunday for this main worship service.", a: "What is sacrament meeting?" },
        { value: 1000, q: "This prophet built more temples than any other Church president in history.", a: "Who is Gordon B. Hinckley?" }
      ],
      medium: [
        { value: 200,  q: "The 13 fundamental beliefs of the Church are known by this name.", a: "What are the Articles of Faith?" },
        { value: 400,  q: "Young men in the Church begin serving as deacons at this age.", a: "What is 12?" },
        { value: 600,  q: "Full-time male missionaries typically serve for this many months.", a: "What is 24 months (2 years)?" },
        { value: 800,  q: "Sacred buildings where ordinances such as baptisms for the dead are performed.", a: "What are temples?" },
        { value: 1000, q: "The Word of Wisdom tells members to avoid coffee, tea, alcohol, and this fourth substance.", a: "What is tobacco?" }
      ],
      hard: [
        { value: 200,  q: "The total number of Articles of Faith.", a: "What is 13?" },
        { value: 400,  q: "This section of the Doctrine and Covenants, known as 'The Vision,' describes the three kingdoms of glory.", a: "What is section 76?" },
        { value: 600,  q: "This economic system, attempted by early Latter-day Saints, required members to consecrate all their property to the Church.", a: "What is the United Order?" },
        { value: 800,  q: "This temple, dedicated in 1893, took 40 years to build and is the centerpiece of Temple Square.", a: "What is the Salt Lake Temple?" },
        { value: 1000, q: "The doctrinal belief that humans can grow to become like God — also called eternal progression or theosis.", a: "What is exaltation?" }
      ]
    }
  },

  // ── 7. VIDEO GAMES ────────────────────────────────────────────────────────
  {
    name: "Video Games",
    questions: {
      easy: [
        { value: 200,  q: "Mario's enemy — a small walking mushroom creature that waddles toward you.", a: "What is a Goomba?" },
        { value: 400,  q: "In this wildly popular game, you catch creatures using red and white balls.", a: "What is Pokémon?" },
        { value: 600,  q: "In Minecraft, everything is built by placing and breaking these fundamental units.", a: "What are blocks?" },
        { value: 800,  q: "This Nintendo console, released in 2017, works as both a handheld and a home console.", a: "What is the Nintendo Switch?" },
        { value: 1000, q: "The princess Mario is always trying to rescue.", a: "Who is Princess Peach?" }
      ],
      medium: [
        { value: 200,  q: "This yellow character eats dots and avoids ghosts in a classic arcade maze.", a: "Who is Pac-Man?" },
        { value: 400,  q: "In Minecraft, these silent green creatures sneak up on players and explode.", a: "What are Creepers?" },
        { value: 600,  q: "Mario's younger brother, who always wears green.", a: "Who is Luigi?" },
        { value: 800,  q: "This battle royale game made by Epic Games became a worldwide phenomenon in 2017.", a: "What is Fortnite?" },
        { value: 1000, q: "The hero you actually play as in The Legend of Zelda — not Zelda herself.", a: "Who is Link?" }
      ],
      hard: [
        { value: 200,  q: "This Japanese gaming company created Mario, Zelda, Pokémon, and Donkey Kong.", a: "What is Nintendo?" },
        { value: 400,  q: "The best-selling video game of all time as of 2024, with over 300 million copies sold.", a: "What is Minecraft?" },
        { value: 600,  q: "The protagonist of the Halo series — a supersoldier who wears green Mjolnir armor.", a: "Who is Master Chief?" },
        { value: 800,  q: "This 1985 NES game is widely credited with reviving the North American video game industry after the 1983 crash.", a: "What is Super Mario Bros.?" },
        { value: 1000, q: "This open-world RPG series set in the land of Tamriel features dragons and the battle cry 'Fus Ro Dah.'", a: "What is The Elder Scrolls (or Skyrim)?" }
      ]
    }
  },

  // ── 8. MUSIC ──────────────────────────────────────────────────────────────
  {
    name: "Music",
    questions: {
      easy: [
        { value: 200,  q: "The number of strings on a standard guitar.", a: "What is 6?" },
        { value: 400,  q: "The music icon known as the 'King of Rock and Roll.'", a: "Who is Elvis Presley?" },
        { value: 600,  q: "A piano has this many black and white keys in total.", a: "What is 88?" },
        { value: 800,  q: "A song performed by one person alone is called this.", a: "What is a solo?" },
        { value: 1000, q: "The Beatles were from this country.", a: "What is England (the United Kingdom)?" }
      ],
      medium: [
        { value: 200,  q: "This pop megastar released the album 'Midnights' in 2022 and broke countless streaming records.", a: "Who is Taylor Swift?" },
        { value: 400,  q: "The Beatles were from this country.", a: "What is England (the United Kingdom)?" },
        { value: 600,  q: "This instrument has exactly 88 keys.", a: "What is a piano?" },
        { value: 800,  q: "'Old Town Road' was a record-breaking hit by this artist in 2019.", a: "Who is Lil Nas X?" },
        { value: 1000, q: "This part of a song contains the main repeated hook and is usually the most recognizable section.", a: "What is the chorus?" }
      ],
      hard: [
        { value: 200,  q: "The musical dynamic marking abbreviated 'pp,' meaning to play very softly.", a: "What is pianissimo?" },
        { value: 400,  q: "Beethoven composed his famous 9th Symphony — including 'Ode to Joy' — after becoming completely this.", a: "What is deaf?" },
        { value: 600,  q: "This American singer, known as the 'Queen of Soul,' recorded the iconic hit 'Respect.'", a: "Who is Aretha Franklin?" },
        { value: 800,  q: "A musical piece composed for exactly two performers.", a: "What is a duet?" },
        { value: 1000, q: "This uniquely American genre of music originated in New Orleans and blends blues, ragtime, and European harmony.", a: "What is jazz?" }
      ]
    }
  },

  // ── 9. GEOGRAPHY ─────────────────────────────────────────────────────────
  {
    name: "Geography",
    questions: {
      easy: [
        { value: 200,  q: "The continent where the United States is located.", a: "What is North America?" },
        { value: 400,  q: "The large body of water between the United States and Europe.", a: "What is the Atlantic Ocean?" },
        { value: 600,  q: "The tallest mountain in the world.", a: "What is Mount Everest?" },
        { value: 800,  q: "This country is famous for being shaped like a boot.", a: "What is Italy?" },
        { value: 1000, q: "The capital city of the United States.", a: "What is Washington D.C.?" }
      ],
      medium: [
        { value: 200,  q: "The largest continent on Earth.", a: "What is Asia?" },
        { value: 400,  q: "This river is considered the longest in the world.", a: "What is the Nile?" },
        { value: 600,  q: "The capital city of Australia — not Sydney.", a: "What is Canberra?" },
        { value: 800,  q: "As of 2023, this country surpassed China to become the most populous nation on Earth.", a: "What is India?" },
        { value: 1000, q: "The only continent that is also an independent country.", a: "What is Australia?" }
      ],
      hard: [
        { value: 200,  q: "The country with the longest coastline in the world.", a: "What is Canada?" },
        { value: 400,  q: "This narrow South American country stretches more than 2,600 miles along the Pacific coast.", a: "What is Chile?" },
        { value: 600,  q: "The Amazon River flows through this country before emptying into the Atlantic Ocean.", a: "What is Brazil?" },
        { value: 800,  q: "Vatican City, the world's smallest country by area, is located entirely within this European capital.", a: "What is Rome?" },
        { value: 1000, q: "The only surviving ancient wonder of the world, located in Egypt.", a: "What is the Great Pyramid of Giza?" }
      ]
    }
  },

  // ── 10. ANIMALS & NATURE ─────────────────────────────────────────────────
  {
    name: "Animals & Nature",
    questions: {
      easy: [
        { value: 200,  q: "This black and white bear from China eats mostly bamboo.", a: "What is a panda?" },
        { value: 400,  q: "The largest land animal on Earth.", a: "What is an elephant?" },
        { value: 600,  q: "A baby dog is called this.", a: "What is a puppy?" },
        { value: 800,  q: "This eight-legged sea creature can squirt ink to escape predators.", a: "What is an octopus?" },
        { value: 1000, q: "Butterflies begin their lives as these crawling creatures.", a: "What are caterpillars?" }
      ],
      medium: [
        { value: 200,  q: "The fastest land animal on Earth.", a: "What is the cheetah?" },
        { value: 400,  q: "The largest ocean on Earth.", a: "What is the Pacific Ocean?" },
        { value: 600,  q: "A group of lions living together is called this.", a: "What is a pride?" },
        { value: 800,  q: "This unusual mammal lays eggs instead of giving birth to live young.", a: "What is a platypus (or echidna)?" },
        { value: 1000, q: "The tallest living animal on Earth.", a: "What is the giraffe?" }
      ],
      hard: [
        { value: 200,  q: "The scientific study of animals.", a: "What is zoology?" },
        { value: 400,  q: "This seabird holds the record for the longest migration of any animal, flying from the Arctic to the Antarctic and back each year.", a: "What is the Arctic tern?" },
        { value: 600,  q: "A group of crows is called this — the same word used for a gathering of witches in folklore.", a: "What is a murder?" },
        { value: 800,  q: "The symbiotic relationship where both organisms benefit from each other.", a: "What is mutualism?" },
        { value: 1000, q: "The only continent where no reptiles are native.", a: "What is Antarctica?" }
      ]
    }
  },

  // ── 11. MATH & NUMBERS ───────────────────────────────────────────────────
  {
    name: "Math & Numbers",
    questions: {
      easy: [
        { value: 200,  q: "The number of sides on a triangle.", a: "What is 3?" },
        { value: 400,  q: "The number of inches in one foot.", a: "What is 12?" },
        { value: 600,  q: "A shape with four equal sides and four right angles.", a: "What is a square?" },
        { value: 800,  q: "The number of seconds in one minute.", a: "What is 60?" },
        { value: 1000, q: "25% of 200.", a: "What is 50?" }
      ],
      medium: [
        { value: 200,  q: "The number of sides on a hexagon.", a: "What is 6?" },
        { value: 400,  q: "Pi rounded to the nearest hundredth.", a: "What is 3.14?" },
        { value: 600,  q: "The square root of 144.", a: "What is 12?" },
        { value: 800,  q: "A triangle with all three sides of equal length is called this.", a: "What is equilateral?" },
        { value: 1000, q: "The only even prime number.", a: "What is 2?" }
      ],
      hard: [
        { value: 200,  q: "The mathematical term for the distance around a circle.", a: "What is circumference?" },
        { value: 400,  q: "In a right triangle, this theorem states that a² + b² = c².", a: "What is the Pythagorean theorem?" },
        { value: 600,  q: "Expressed as a simple fraction, 0.333... (repeating) equals this.", a: "What is 1/3?" },
        { value: 800,  q: "The sum of the interior angles of any triangle.", a: "What is 180 degrees?" },
        { value: 1000, q: "This famous mathematical sequence begins 0, 1, 1, 2, 3, 5, 8, 13, 21...", a: "What is the Fibonacci sequence?" }
      ]
    }
  },

  // ── 12. BOOK OF MORMON HEROES ─────────────────────────────────────────────
  {
    name: "Book of Mormon Heroes",
    questions: {
      easy: [
        { value: 200,  q: "This son of Lehi built a ship and sailed his family across the ocean to the promised land.", a: "Who is Nephi?" },
        { value: 400,  q: "Ammon impressed King Lamoni by defending the royal flocks and cutting off robbers' arms with this weapon.", a: "What is a sword?" },
        { value: 600,  q: "These converted Lamanites buried their weapons deep in the earth and covenanted never to shed blood again.", a: "Who are the Anti-Nephi-Lehies (or the people of Ammon)?" },
        { value: 800,  q: "This Nephite military commander wrote his beliefs on a 'title of liberty' and rallied his people to defend their faith.", a: "Who is Captain Moroni?" },
        { value: 1000, q: "The brother of Jared asked the Lord to touch these 16 clear stones so they would glow and light the Jaredite barges.", a: "What are stones?" }
      ],
      medium: [
        { value: 200,  q: "This Nephite military commander wrote his beliefs on a 'title of liberty.'", a: "Who is Captain Moroni?" },
        { value: 400,  q: "These 2,000 young warriors were famous for their faith — and not one was killed in battle.", a: "Who are the stripling warriors (sons of Helaman)?" },
        { value: 600,  q: "This prophet abridged most of the Book of Mormon records into a single volume.", a: "Who is Mormon?" },
        { value: 800,  q: "Ammon served as a missionary to the people of this Lamanite king.", a: "Who is King Lamoni?" },
        { value: 1000, q: "Moroni buried the gold plates in this hill in upstate New York.", a: "What is the Hill Cumorah?" }
      ],
      hard: [
        { value: 200,  q: "This Lamanite prophet stood on the city walls of Zarahemla and declared repentance to the Nephites.", a: "Who is Samuel the Lamanite?" },
        { value: 400,  q: "The Jaredites traveled to the promised land in these sealed, air-tight vessels.", a: "What are barges?" },
        { value: 600,  q: "This final Nephite prophet-commander was given charge of the plates by his father Mormon, then hid them in Cumorah.", a: "Who is Moroni?" },
        { value: 800,  q: "Mormon took his name from this body of water near where he was raised as a child.", a: "What is the Waters (or land) of Mormon?" },
        { value: 1000, q: "Alma the Younger and the sons of Mosiah were stopped from persecuting the Church when this miraculous event occurred.", a: "What is the appearance of an angel (who rebuked them)?" }
      ]
    }
  },

  // ── 13. US HISTORY ───────────────────────────────────────────────────────
  {
    name: "US History",
    questions: {
      easy: [
        { value: 200,  q: "The first president of the United States.", a: "Who is George Washington?" },
        { value: 400,  q: "America declared independence from this country in 1776.", a: "What is England (Great Britain)?" },
        { value: 600,  q: "Abraham Lincoln issued this document freeing enslaved people in Confederate states.", a: "What is the Emancipation Proclamation?" },
        { value: 800,  q: "American astronauts first landed on the moon in this decade.", a: "What is the 1960s?" },
        { value: 1000, q: "The war fought between the Northern and Southern United States from 1861 to 1865.", a: "What is the Civil War?" }
      ],
      medium: [
        { value: 200,  q: "The first president of the United States.", a: "Who is George Washington?" },
        { value: 400,  q: "The Declaration of Independence was signed in this year.", a: "What is 1776?" },
        { value: 600,  q: "This document, issued by Lincoln in 1863, declared enslaved people in Confederate states to be free.", a: "What is the Emancipation Proclamation?" },
        { value: 800,  q: "Neil Armstrong became the first person to walk on the moon in this year.", a: "What is 1969?" },
        { value: 1000, q: "The first 10 amendments to the U.S. Constitution are collectively known as this.", a: "What is the Bill of Rights?" }
      ],
      hard: [
        { value: 200,  q: "The treaty that officially ended the War of 1812 between the United States and Britain.", a: "What is the Treaty of Ghent?" },
        { value: 400,  q: "The period from 1920 to 1933 when the production and sale of alcohol was banned in the United States.", a: "What is Prohibition?" },
        { value: 600,  q: "This 1954 Supreme Court case declared racial segregation in public schools unconstitutional.", a: "What is Brown v. Board of Education?" },
        { value: 800,  q: "The political belief that the United States was destined to expand westward across North America.", a: "What is Manifest Destiny?" },
        { value: 1000, q: "This 1803 land deal with France roughly doubled the size of the United States.", a: "What is the Louisiana Purchase?" }
      ]
    }
  },

  // ── 14. SUPERHEROES ──────────────────────────────────────────────────────
  {
    name: "Superheroes",
    questions: {
      easy: [
        { value: 200,  q: "This superhero can fly and is known as the 'Man of Steel.'", a: "Who is Superman?" },
        { value: 400,  q: "Spider-Man gained his powers after being bitten by this creature.", a: "What is a (radioactive) spider?" },
        { value: 600,  q: "This superhero carries a magic hammer called Mjolnir.", a: "Who is Thor?" },
        { value: 800,  q: "The color of the Hulk's skin.", a: "What is green?" },
        { value: 1000, q: "Batman lives and trains in a secret underground base beneath Wayne Manor called the ___.", a: "What is the Batcave?" }
      ],
      medium: [
        { value: 200,  q: "Spider-Man's real name.", a: "Who is Peter Parker?" },
        { value: 400,  q: "This superhero is the king of the fictional African nation of Wakanda.", a: "Who is Black Panther (T'Challa)?" },
        { value: 600,  q: "Batman's fictional home city.", a: "What is Gotham City?" },
        { value: 800,  q: "Before becoming the Hulk, this scientist was exposed to a massive dose of gamma radiation.", a: "Who is Bruce Banner?" },
        { value: 1000, q: "This superhero team includes Iron Man, Captain America, Thor, Black Widow, Hawkeye, and the Hulk.", a: "Who are the Avengers?" }
      ],
      hard: [
        { value: 200,  q: "Clark Kent is the mild-mannered secret identity of this superhero.", a: "Who is Superman?" },
        { value: 400,  q: "This Avenger uses a bow and arrow as his primary weapon in battle.", a: "Who is Hawkeye (Clint Barton)?" },
        { value: 600,  q: "Captain America's shield is made of this fictional metal, the same material found in Wakanda.", a: "What is vibranium?" },
        { value: 800,  q: "Thanos sought to collect all six of these magical objects in order to wipe out half of all life in the universe.", a: "What are the Infinity Stones?" },
        { value: 1000, q: "This DC speedster, a founding member of the Justice League, can run at superhuman speeds.", a: "Who is The Flash (Barry Allen)?" }
      ]
    }
  },

  // ── 15. LATTER-DAY PROPHETS ───────────────────────────────────────────────
  {
    name: "Latter-day Prophets",
    questions: {
      easy: [
        { value: 200,  q: "The name of the prophet who translated the Book of Mormon.", a: "Who is Joseph Smith?" },
        { value: 400,  q: "Brigham Young was the ___ (number) president of the Church.", a: "What is second (2nd)?" },
        { value: 600,  q: "Joseph Smith was this many years old when he had his First Vision.", a: "What is 14?" },
        { value: 800,  q: "The name of the current prophet of the Church.", a: "Who is Russell M. Nelson?" },
        { value: 1000, q: "This prophet led the pioneer Saints from Nauvoo across the plains to the Salt Lake Valley.", a: "Who is Brigham Young?" }
      ],
      medium: [
        { value: 200,  q: "The current prophet and president of the Church of Jesus Christ of Latter-day Saints.", a: "Who is Russell M. Nelson?" },
        { value: 400,  q: "This second president of the Church led the Saints across the plains to Utah.", a: "Who is Brigham Young?" },
        { value: 600,  q: "This prophet received the revelation in 1978 extending the priesthood to all worthy male members.", a: "Who is Spencer W. Kimball?" },
        { value: 800,  q: "Gordon B. Hinckley oversaw the construction of more of these than any other prophet.", a: "What are temples?" },
        { value: 1000, q: "Joseph Smith was this many years old when he had his First Vision.", a: "What is 14?" }
      ],
      hard: [
        { value: 200,  q: "Gordon B. Hinckley served as Church president from 1995 until his death in this year.", a: "What is 2008?" },
        { value: 400,  q: "Before becoming prophet, Russell M. Nelson was a pioneering surgeon in this medical specialty.", a: "What is cardiovascular (or open-heart) surgery?" },
        { value: 600,  q: "This prophet served the longest as Church president — approximately 30 years, from 1847 to 1877.", a: "Who is Brigham Young?" },
        { value: 800,  q: "The Manifesto officially ending the practice of plural marriage was issued by this prophet in 1890.", a: "Who is Wilford Woodruff?" },
        { value: 1000, q: "This Church president formally introduced the welfare program in 1936 to help members during the Great Depression.", a: "Who is Heber J. Grant?" }
      ]
    }
  }

];

// ── FINAL JEOPARDY ────────────────────────────────────────────────────────
// One question is picked at random each game.

const FINAL_JEOPARDY = [
  {
    category: "Kingdoms of Glory",
    q: "The three degrees of glory revealed to Joseph Smith and Sidney Rigdon in Doctrine & Covenants 76 are named after the sun, the moon, and the stars.",
    a: "What are the Celestial, Terrestrial, and Telestial kingdoms?"
  },
  {
    category: "The Bible",
    q: "At just two words, this is the shortest verse in the King James Bible.",
    a: "What is 'Jesus wept'? (John 11:35)"
  },
  {
    category: "Sports Records",
    q: "In February 2023, this NBA player surpassed Kareem Abdul-Jabbar to become the all-time leading scorer in NBA history.",
    a: "Who is LeBron James?"
  },
  {
    category: "The Solar System",
    q: "This is the only planet in our solar system that rotates on its side, with an axial tilt of about 98 degrees.",
    a: "What is Uranus?"
  },
  {
    category: "US Presidents",
    q: "He is the only U.S. president to serve two non-consecutive terms, making him both the 22nd and 24th president.",
    a: "Who is Grover Cleveland?"
  },
  {
    category: "The Book of Mormon",
    q: "This Lamanite king was converted after witnessing Ammon defend the royal flocks, then fell to the earth as if dead and lay unconscious for two days.",
    a: "Who is King Lamoni?"
  },
  {
    category: "Animated Movies",
    q: "This 2003 Pixar film about a clownfish searching for his missing son became the best-selling DVD of all time at that point.",
    a: "What is Finding Nemo?"
  },
  {
    category: "Church Doctrine",
    q: "This divine attribute, taught as unique to Latter-day Saint theology, holds that God the Father has a perfected, physical body of flesh and bones.",
    a: "What is the corporeality of God (or that God has a physical body)?"
  },
  {
    category: "World Geography",
    q: "Vatican City, the world's smallest country by area, is located entirely within this European capital city.",
    a: "What is Rome?"
  },
  {
    category: "Science",
    q: "This is the hardest natural substance on Earth, rating a perfect 10 on the Mohs hardness scale.",
    a: "What is a diamond?"
  }
];
