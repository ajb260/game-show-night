// Jeopardy Questions - LDS Youth Activity Night (Boys 12-18)
// Each game randomly picks 6 categories from this full list.
// Each category has 3 difficulty levels with 5 questions each.
//   easy   → Ages 12–14  ($200 = simplest, $1000 = hardest within this tier)
//   medium → Ages 14–16
//   hard   → Ages 16–18

const ALL_CATEGORIES = [

  // ── 1. SCRIPTURE KNOWLEDGE ────────────────────────────────────────────────
  {
    name: "Scripture Knowledge",
    questions: {
      easy: [
        { value: 200,  q: "Jesus was born in this city, where He lay in a manger.", a: "What is Bethlehem?" },
        { value: 400,  q: "God commanded this man to build a large wooden ark to survive a great flood.", a: "Who is Noah?" },
        { value: 600,  q: "Lehi's family left this city at the very beginning of the Book of Mormon.", a: "What is Jerusalem?" },
        { value: 800,  q: "Nephi built this vessel to carry his family across the ocean to the promised land.", a: "What is a ship?" },
        { value: 1000, q: "Jesus fasted in the wilderness for this many days before being tempted by Satan.", a: "What is 40 days?" }
      ],
      medium: [
        { value: 200,  q: "The first book of the Book of Mormon.", a: "What is 1 Nephi?" },
        { value: 400,  q: "This prophet in the Book of Mormon had a vision of the tree of life with fruit that filled the soul with joy.", a: "Who is Lehi (or Nephi)?" },
        { value: 600,  q: "The Sermon on the Mount is found in this book of the New Testament.", a: "What is Matthew?" },
        { value: 800,  q: "The translation of the Book of Mormon was set back when this man lost 116 manuscript pages.", a: "Who is Martin Harris?" },
        { value: 1000, q: "These three men witnessed the gold plates and signed their testimony printed at the front of the Book of Mormon.", a: "Who are Oliver Cowdery, Martin Harris, and David Whitmer?" }
      ],
      hard: [
        { value: 200,  q: "The New Testament epistle that contains the famous teaching 'faith without works is dead.'", a: "What is James?" },
        { value: 400,  q: "The Doctrine and Covenants section number that contains the Word of Wisdom.", a: "What is section 89?" },
        { value: 600,  q: "This Book of Mormon prophet warned King Noah and was burned at the stake for his testimony.", a: "Who is Abinadi?" },
        { value: 800,  q: "According to 1 Nephi 1:4, Lehi and his family left Jerusalem in approximately this year BC.", a: "What is 600 BC?" },
        { value: 1000, q: "These two disciples — one from the New Testament, two from the Book of Mormon — were translated and continue to minister on the earth.", a: "Who are John the Beloved and the Three Nephites?" }
      ]
    }
  },

  // ── 2. CHURCH HISTORY ─────────────────────────────────────────────────────
  {
    name: "Church History",
    questions: {
      easy: [
        { value: 200,  q: "Joseph Smith prayed in a grove of trees and was visited by Heavenly Father and Jesus Christ in this event.", a: "What is the First Vision?" },
        { value: 400,  q: "This angel appeared to Joseph Smith and directed him to the gold plates buried in a nearby hill.", a: "Who is Moroni?" },
        { value: 600,  q: "Pioneer Saints crossed the plains and eventually settled in this state.", a: "What is Utah?" },
        { value: 800,  q: "The world headquarters of the Church is located in this city.", a: "What is Salt Lake City?" },
        { value: 1000, q: "The Church of Jesus Christ of Latter-day Saints was officially organized in this year.", a: "What is 1830?" }
      ],
      medium: [
        { value: 200,  q: "Joseph Smith said his First Vision occurred in this wooded setting.", a: "What is the Sacred Grove?" },
        { value: 400,  q: "The Church of Jesus Christ of Latter-day Saints was officially organized in this year.", a: "What is 1830?" },
        { value: 600,  q: "Pioneer Saints crossed the plains pulling these human-powered vehicles.", a: "What are handcarts?" },
        { value: 800,  q: "The Nauvoo Temple, where many Saints received their endowments before the westward exodus, was located in this state.", a: "What is Illinois?" },
        { value: 1000, q: "Joseph Smith's primary scribe during the translation of the Book of Mormon.", a: "Who is Oliver Cowdery?" }
      ],
      hard: [
        { value: 200,  q: "Joseph Smith organized the Church in this state.", a: "What is New York?" },
        { value: 400,  q: "Joseph and Hyrum Smith were murdered at this building in Carthage, Illinois in 1844.", a: "What is Carthage Jail?" },
        { value: 600,  q: "The Restoration's founding scriptural account, Joseph Smith—History, is found in this standard work.", a: "What is the Pearl of Great Price?" },
        { value: 800,  q: "The Church was formally organized in the home of this man in Fayette, New York.", a: "Who is Peter Whitmer Sr.?" },
        { value: 1000, q: "This newspaper, whose printing press Joseph Smith ordered destroyed in 1844, directly led to his arrest and martyrdom.", a: "What is the Nauvoo Expositor?" }
      ]
    }
  },

  // ── 3. SPORTS ─────────────────────────────────────────────────────────────
  {
    name: "Sports",
    questions: {
      easy: [
        { value: 200,  q: "Players in this sport try to knock a small white ball into a hole using clubs.", a: "What is golf?" },
        { value: 400,  q: "The sport played on a diamond with bases, a pitcher, and a batter.", a: "What is baseball?" },
        { value: 600,  q: "The Super Bowl is the championship game of this professional sports league.", a: "What is the NFL (or American football)?" },
        { value: 800,  q: "In basketball, shots made from beyond this line are worth three points.", a: "What is the three-point line (or arc)?" },
        { value: 1000, q: "Michael Jordan won six NBA championships while playing for this team.", a: "What is the Chicago Bulls?" }
      ],
      medium: [
        { value: 200,  q: "The number of players per team on a basketball court at one time.", a: "What is 5?" },
        { value: 400,  q: "A perfect score in a single game of bowling.", a: "What is 300?" },
        { value: 600,  q: "In American football, a player scores this many points for a touchdown.", a: "What is 6?" },
        { value: 800,  q: "The Utah Jazz has retired the jersey numbers of these two legendary players.", a: "Who are Karl Malone and John Stockton?" },
        { value: 1000, q: "This BYU quarterback won the Heisman Trophy in 1990.", a: "Who is Ty Detmer?" }
      ],
      hard: [
        { value: 200,  q: "The only country to win the FIFA World Cup five times.", a: "What is Brazil?" },
        { value: 400,  q: "In February 2023, this NBA player surpassed Kareem Abdul-Jabbar to become the all-time leading scorer in NBA history.", a: "Who is LeBron James?" },
        { value: 600,  q: "Before becoming Muhammad Ali, this boxing champion was known by this birth name.", a: "Who is Cassius Clay?" },
        { value: 800,  q: "As of 2024, this tennis player holds the record for the most men's Grand Slam singles titles with 24.", a: "Who is Novak Djokovic?" },
        { value: 1000, q: "The annual horse race held in Louisville, Kentucky, known as the 'Run for the Roses.'", a: "What is the Kentucky Derby?" }
      ]
    }
  },

  // ── 4. SCIENCE & TECH ────────────────────────────────────────────────────
  {
    name: "Science & Tech",
    questions: {
      easy: [
        { value: 200,  q: "This organ in your chest pumps blood through your entire body.", a: "What is the heart?" },
        { value: 400,  q: "H₂O is the chemical formula for this everyday liquid.", a: "What is water?" },
        { value: 600,  q: "The planet in our solar system with a famous ring system surrounding it.", a: "What is Saturn?" },
        { value: 800,  q: "The invisible force that pulls objects toward the ground.", a: "What is gravity?" },
        { value: 1000, q: "This scientist developed the theory of relativity and is famous for the equation E=mc².", a: "Who is Albert Einstein?" }
      ],
      medium: [
        { value: 200,  q: "The planet closest to the sun.", a: "What is Mercury?" },
        { value: 400,  q: "The force that keeps planets in stable orbit around the sun.", a: "What is gravity?" },
        { value: 600,  q: "Water reaches its boiling point at this temperature in Fahrenheit at sea level.", a: "What is 212 degrees?" },
        { value: 800,  q: "The chemical symbol for gold on the periodic table is this two-letter abbreviation.", a: "What is Au?" },
        { value: 1000, q: "This popular programming language shares its name with the type of coffee beans grown in Indonesia.", a: "What is Java?" }
      ],
      hard: [
        { value: 200,  q: "This element is the most abundant metal in Earth's crust, commonly found in cans and foil.", a: "What is aluminum?" },
        { value: 400,  q: "The number of chromosomes found in a typical human cell.", a: "What is 46?" },
        { value: 600,  q: "The speed of light in a vacuum is approximately this many miles per second.", a: "What is 186,000 miles per second?" },
        { value: 800,  q: "This branch of physics studies the behavior of matter and energy at the smallest possible scales, where particles can exist in multiple states at once.", a: "What is quantum mechanics?" },
        { value: 1000, q: "The smallest bone in the human body, located deep inside the ear, is named after this common farm tool.", a: "What is the stapes (the stirrup)?" }
      ]
    }
  },

  // ── 5. MOVIES & POP CULTURE ───────────────────────────────────────────────
  {
    name: "Movies & Pop Culture",
    questions: {
      easy: [
        { value: 200,  q: "In Star Wars, Darth Vader delivers this iconic line: 'Luke, I am your ___.'", a: "What is father?" },
        { value: 400,  q: "This Disney princess lives with seven dwarfs in the forest.", a: "Who is Snow White?" },
        { value: 600,  q: "The name of the cowboy toy who is Andy's favorite in Toy Story.", a: "Who is Woody?" },
        { value: 800,  q: "Simba is the young lion cub hero of this Disney animated classic.", a: "What is The Lion King?" },
        { value: 1000, q: "This superhero's secret identity is billionaire Bruce Wayne.", a: "Who is Batman?" }
      ],
      medium: [
        { value: 200,  q: "This young wizard has a lightning bolt-shaped scar on his forehead.", a: "Who is Harry Potter?" },
        { value: 400,  q: "This Marvel superhero fights crime in a suit of iron and goes by the name Tony Stark.", a: "Who is Iron Man?" },
        { value: 600,  q: "In this Pixar film, toys secretly come to life and go on adventures when humans aren't watching.", a: "What is Toy Story?" },
        { value: 800,  q: "This Pixar film features a family with superpowers who are told by the government to keep them hidden.", a: "What is The Incredibles?" },
        { value: 1000, q: "Jack Black played a blocky character named Steve in this 2025 video-game blockbuster.", a: "What is A Minecraft Movie?" }
      ],
      hard: [
        { value: 200,  q: "Robert Downey Jr. played this character across 10 films in the Marvel Cinematic Universe.", a: "Who is Iron Man (Tony Stark)?" },
        { value: 400,  q: "The fictional sport played on broomsticks in the Harry Potter universe.", a: "What is Quidditch?" },
        { value: 600,  q: "'I am inevitable' and 'I am Iron Man' are the climactic lines of this 2019 Marvel film.", a: "What is Avengers: Endgame?" },
        { value: 800,  q: "This 2001 animated film became the first ever winner of the Academy Award for Best Animated Feature at the 2002 ceremony.", a: "What is Shrek?" },
        { value: 1000, q: "This actor provided the iconic, deep voice of Darth Vader throughout the original Star Wars trilogy.", a: "Who is James Earl Jones?" }
      ]
    }
  },

  // ── 6. LDS FOR THE WIN ───────────────────────────────────────────────────
  {
    name: "LDS For the Win",
    questions: {
      easy: [
        { value: 200,  q: "We are Children of our Heavenly ___.", a: "What is Father?" },
        { value: 400,  q: "This book of scripture was translated by Joseph Smith from gold plates.", a: "What is the Book of Mormon?" },
        { value: 600,  q: "Young men in the Church typically begin serving full-time missions at this age.", a: "What is 18?" },
        { value: 800,  q: "Church members gather each Sunday for this main worship service where the sacrament is blessed and passed.", a: "What is sacrament meeting?" },
        { value: 1000, q: "This Church president oversaw the construction of more temples than any other prophet in Church history.", a: "Who is Gordon B. Hinckley?" }
      ],
      medium: [
        { value: 200,  q: "Young men in the Church begin serving as deacons at this age.", a: "What is 12?" },
        { value: 400,  q: "Full-time male missionaries typically serve for this many months.", a: "What is 24 months (2 years)?" },
        { value: 600,  q: "Sacred buildings where ordinances such as eternal marriages and baptisms for the dead are performed.", a: "What are temples?" },
        { value: 800,  q: "The total number of Articles of Faith that Joseph Smith wrote to summarize basic Church beliefs.", a: "What is 13?" },
        { value: 1000, q: "The Word of Wisdom health code is found in this section of the Doctrine and Covenants.", a: "What is section 89?" }
      ],
      hard: [
        { value: 200,  q: "The doctrinal belief that humans can grow to become like God and inherit all that He has — also called eternal progression.", a: "What is exaltation?" },
        { value: 400,  q: "This section of the Doctrine and Covenants, known as 'The Vision,' describes the three kingdoms of glory in detail.", a: "What is section 76?" },
        { value: 600,  q: "This economic system, attempted by early Latter-day Saints, required members to consecrate all their property to the Church for equal distribution.", a: "What is the United Order?" },
        { value: 800,  q: "This temple, dedicated in 1893 after 40 years of construction, stands at the center of Temple Square in Salt Lake City.", a: "What is the Salt Lake Temple?" },
        { value: 1000, q: "This auxiliary organization, founded in Nauvoo in 1842 under Emma Smith, is considered the oldest and largest women's organization in the world.", a: "What is the Relief Society?" }
      ]
    }
  },

  // ── 7. VIDEO GAMES ────────────────────────────────────────────────────────
  {
    name: "Video Games",
    questions: {
      easy: [
        { value: 200,  q: "The princess that Mario is always on a quest to rescue.", a: "Who is Princess Peach?" },
        { value: 400,  q: "In this wildly popular game series, players catch creatures using red and white balls called Poké Balls.", a: "What is Pokémon?" },
        { value: 600,  q: "In Minecraft, the entire world — and everything you build — is made of these fundamental units.", a: "What are blocks?" },
        { value: 800,  q: "In Mario, this is the name of the small walking mushroom enemy that waddles toward you.", a: "What is a Goomba?" },
        { value: 1000, q: "This Nintendo console, released in 2017, can be played both as a handheld device and plugged into a TV as a home console.", a: "What is the Nintendo Switch?" }
      ],
      medium: [
        { value: 200,  q: "This yellow character eats dots and avoids ghosts in a classic arcade maze.", a: "Who is Pac-Man?" },
        { value: 400,  q: "Mario's younger brother, who always wears green.", a: "Who is Luigi?" },
        { value: 600,  q: "In Minecraft, these silent green creatures sneak up on players and then explode, destroying blocks and sending players flying.", a: "What are Creepers?" },
        { value: 800,  q: "This battle royale game made by Epic Games became a worldwide phenomenon after its release in 2017.", a: "What is Fortnite?" },
        { value: 1000, q: "Despite the game series being named 'The Legend of Zelda,' this is the name of the hero you actually play as.", a: "Who is Link?" }
      ],
      hard: [
        { value: 200,  q: "This Japanese gaming company created Mario, The Legend of Zelda, Pokémon, and Donkey Kong.", a: "What is Nintendo?" },
        { value: 400,  q: "The protagonist of the Halo series — a super-soldier who wears green Mjolnir power armor.", a: "Who is Master Chief?" },
        { value: 600,  q: "The best-selling video game of all time as of 2024, with over 300 million copies sold across all platforms.", a: "What is Minecraft?" },
        { value: 800,  q: "This open-world RPG, set in the snowy land of Skyrim, features dragons and the iconic battle shout 'Fus Ro Dah.'", a: "What is The Elder Scrolls V: Skyrim?" },
        { value: 1000, q: "This 1985 NES game is widely credited with reviving the North American video game industry after the devastating 1983 market crash.", a: "What is Super Mario Bros.?" }
      ]
    }
  },

  // ── 8. MUSIC ──────────────────────────────────────────────────────────────
  {
    name: "Music",
    questions: {
      easy: [
        { value: 200,  q: "The music icon known as the 'King of Rock and Roll.'", a: "Who is Elvis Presley?" },
        { value: 400,  q: "The number of strings on a standard guitar.", a: "What is 6?" },
        { value: 600,  q: "A song performed by one person alone, without accompaniment, is called this.", a: "What is a solo?" },
        { value: 800,  q: "The Beatles were from this country.", a: "What is England (the United Kingdom)?" },
        { value: 1000, q: "A piano has exactly this many black and white keys in total.", a: "What is 88?" }
      ],
      medium: [
        { value: 200,  q: "The main repeated part of a song — the section with the hook that everyone knows — is called this.", a: "What is the chorus?" },
        { value: 400,  q: "This pop megastar released the album 'Midnights' in 2022, breaking dozens of streaming records.", a: "Who is Taylor Swift?" },
        { value: 600,  q: "'Old Town Road' was a record-breaking hit in 2019 by this artist.", a: "Who is Lil Nas X?" },
        { value: 800,  q: "This British band, sometimes called the greatest rock group of all time, broke up in 1970 after a decade of iconic music.", a: "What are The Beatles?" },
        { value: 1000, q: "This annual American music award, nicknamed the 'Grammy,' is one of the highest honors in the music industry.", a: "What is the Grammy Award (or the Recording Academy Award)?" }
      ],
      hard: [
        { value: 200,  q: "A musical piece written for exactly two performers.", a: "What is a duet?" },
        { value: 400,  q: "Beethoven composed his famous 9th Symphony — including 'Ode to Joy' — after becoming completely this.", a: "What is deaf?" },
        { value: 600,  q: "This American singer, known as the 'Queen of Soul,' recorded the iconic hit 'Respect.'", a: "Who is Aretha Franklin?" },
        { value: 800,  q: "This uniquely American genre of music, originating in New Orleans, blends blues, ragtime, and European harmony.", a: "What is jazz?" },
        { value: 1000, q: "The musical dynamic marking abbreviated 'pp,' instructing a musician to play as softly as possible.", a: "What is pianissimo?" }
      ]
    }
  },

  // ── 9. GEOGRAPHY ─────────────────────────────────────────────────────────
  {
    name: "Geography",
    questions: {
      easy: [
        { value: 200,  q: "The capital city of the United States.", a: "What is Washington D.C.?" },
        { value: 400,  q: "The continent where the United States is located.", a: "What is North America?" },
        { value: 600,  q: "The large body of water between the United States and Europe.", a: "What is the Atlantic Ocean?" },
        { value: 800,  q: "This European country is famous for being shaped like a boot.", a: "What is Italy?" },
        { value: 1000, q: "The tallest mountain in the world, located in the Himalayas.", a: "What is Mount Everest?" }
      ],
      medium: [
        { value: 200,  q: "The largest continent on Earth.", a: "What is Asia?" },
        { value: 400,  q: "This river, flowing through northeastern Africa, is considered the longest in the world.", a: "What is the Nile?" },
        { value: 600,  q: "This is the only continent on Earth that is also a single independent country.", a: "What is Australia?" },
        { value: 800,  q: "As of 2023, this country surpassed China to become the most populous nation on Earth.", a: "What is India?" },
        { value: 1000, q: "Despite what many people think, this is the actual capital city of Australia — not Sydney.", a: "What is Canberra?" }
      ],
      hard: [
        { value: 200,  q: "The Amazon River flows through this South American country before emptying into the Atlantic Ocean.", a: "What is Brazil?" },
        { value: 400,  q: "Vatican City, the world's smallest country by area, is located entirely within this European capital.", a: "What is Rome?" },
        { value: 600,  q: "The only surviving ancient wonder of the world, located near Giza, Egypt.", a: "What is the Great Pyramid of Giza?" },
        { value: 800,  q: "This narrow South American country stretches more than 2,600 miles along the Pacific coast.", a: "What is Chile?" },
        { value: 1000, q: "Despite being far less populous than many countries, this nation has the longest coastline in the world.", a: "What is Canada?" }
      ]
    }
  },

  // ── 10. ANIMALS & NATURE ─────────────────────────────────────────────────
  {
    name: "Animals & Nature",
    questions: {
      easy: [
        { value: 200,  q: "A baby dog is called this.", a: "What is a puppy?" },
        { value: 400,  q: "This black and white bear from China eats mostly bamboo.", a: "What is a panda?" },
        { value: 600,  q: "This eight-legged sea creature can squirt ink to escape predators.", a: "What is an octopus?" },
        { value: 800,  q: "Butterflies begin their lives as these crawling creatures.", a: "What are caterpillars?" },
        { value: 1000, q: "The largest land animal on Earth.", a: "What is an elephant?" }
      ],
      medium: [
        { value: 200,  q: "The tallest living animal on Earth.", a: "What is the giraffe?" },
        { value: 400,  q: "The fastest land animal on Earth.", a: "What is the cheetah?" },
        { value: 600,  q: "The largest ocean on Earth.", a: "What is the Pacific Ocean?" },
        { value: 800,  q: "This unusual mammal lays eggs instead of giving birth to live young.", a: "What is a platypus (or echidna)?" },
        { value: 1000, q: "A group of lions living together is called this.", a: "What is a pride?" }
      ],
      hard: [
        { value: 200,  q: "The scientific study of animals.", a: "What is zoology?" },
        { value: 400,  q: "The only continent where no reptiles are native.", a: "What is Antarctica?" },
        { value: 600,  q: "The symbiotic relationship where both organisms benefit from living together.", a: "What is mutualism?" },
        { value: 800,  q: "A group of crows is known by this eerie collective noun — also associated with witches in folklore.", a: "What is a murder?" },
        { value: 1000, q: "This seabird holds the record for the longest annual migration of any animal, flying from the Arctic to the Antarctic and back each year.", a: "What is the Arctic tern?" }
      ]
    }
  },

  // ── 11. MATH & NUMBERS ───────────────────────────────────────────────────
  {
    name: "Math & Numbers",
    questions: {
      easy: [
        { value: 200,  q: "The number of seconds in one minute.", a: "What is 60?" },
        { value: 400,  q: "The number of sides on a triangle.", a: "What is 3?" },
        { value: 600,  q: "The number of inches in one foot.", a: "What is 12?" },
        { value: 800,  q: "A flat shape with four equal sides and four right angles.", a: "What is a square?" },
        { value: 1000, q: "25% of 200.", a: "What is 50?" }
      ],
      medium: [
        { value: 200,  q: "Pi rounded to the nearest hundredth.", a: "What is 3.14?" },
        { value: 400,  q: "The number of sides on a hexagon.", a: "What is 6?" },
        { value: 600,  q: "A triangle with all three sides of equal length is called this.", a: "What is equilateral?" },
        { value: 800,  q: "The square root of 144.", a: "What is 12?" },
        { value: 1000, q: "The only even prime number.", a: "What is 2?" }
      ],
      hard: [
        { value: 200,  q: "The sum of the interior angles of any triangle.", a: "What is 180 degrees?" },
        { value: 400,  q: "In a right triangle, this theorem states that a² + b² = c².", a: "What is the Pythagorean theorem?" },
        { value: 600,  q: "The mathematical term for the distance around the outside of a circle.", a: "What is circumference?" },
        { value: 800,  q: "Expressed as a simple fraction, 0.333... (repeating forever) equals this.", a: "What is 1/3?" },
        { value: 1000, q: "This famous mathematical sequence begins 0, 1, 1, 2, 3, 5, 8, 13, 21, 34... where each number is the sum of the two before it.", a: "What is the Fibonacci sequence?" }
      ]
    }
  },

  // ── 12. BOOK OF MORMON HEROES ─────────────────────────────────────────────
  {
    name: "Book of Mormon Heroes",
    questions: {
      easy: [
        { value: 200,  q: "This son of Lehi built a ship and sailed his family across the ocean to the promised land.", a: "Who is Nephi?" },
        { value: 400,  q: "This Nephite military commander wrote his beliefs on a 'title of liberty' and rallied the Nephites to defend their faith and families.", a: "Who is Captain Moroni?" },
        { value: 600,  q: "Ammon defended King Lamoni's flocks and cut off the arms of attacking robbers with this weapon.", a: "What is a sword?" },
        { value: 800,  q: "These converted Lamanites buried their weapons deep in the earth and covenanted never to shed blood again.", a: "Who are the Anti-Nephi-Lehies (or the people of Ammon)?" },
        { value: 1000, q: "The brother of Jared asked the Lord to touch 16 clear stones so they would glow and provide light for the Jaredite ships.", a: "What are stones?" }
      ],
      medium: [
        { value: 200,  q: "Moroni buried the gold plates in this hill in upstate New York.", a: "What is the Hill Cumorah?" },
        { value: 400,  q: "This Nephite military commander wrote his beliefs on a 'title of liberty' to inspire the Nephites.", a: "Who is Captain Moroni?" },
        { value: 600,  q: "These 2,000 young warriors were famous for their extraordinary faith — and not a single one was killed in battle.", a: "Who are the stripling warriors (sons of Helaman)?" },
        { value: 800,  q: "Ammon served as a missionary to the people of this Lamanite king, whom he converted.", a: "Who is King Lamoni?" },
        { value: 1000, q: "This prophet abridged and compiled most of the Book of Mormon records into a single volume.", a: "Who is Mormon?" }
      ],
      hard: [
        { value: 200,  q: "Alma the Younger and the sons of Mosiah were stopped from persecuting the Church when this miraculous event occurred.", a: "What is the appearance of an angel (who rebuked them)?" },
        { value: 400,  q: "This Lamanite prophet stood on the city walls of Zarahemla and declared repentance to the Nephites.", a: "Who is Samuel the Lamanite?" },
        { value: 600,  q: "This final Nephite prophet was given charge of the plates by his father Mormon, then sealed them up and hid them in the Hill Cumorah.", a: "Who is Moroni?" },
        { value: 800,  q: "The Jaredites traveled to the promised land in these sealed, watertight vessels that were driven by the wind.", a: "What are barges?" },
        { value: 1000, q: "Mormon took his name from this body of water, near which he was raised as a child and where Alma baptized early converts.", a: "What is the Waters (or land) of Mormon?" }
      ]
    }
  },

  // ── 13. US HISTORY ───────────────────────────────────────────────────────
  {
    name: "US History",
    questions: {
      easy: [
        { value: 200,  q: "The first president of the United States.", a: "Who is George Washington?" },
        { value: 400,  q: "The war fought between the Northern and Southern United States from 1861 to 1865.", a: "What is the Civil War?" },
        { value: 600,  q: "American astronauts first landed on the moon in this decade.", a: "What is the 1960s?" },
        { value: 800,  q: "America declared independence from this country in 1776.", a: "What is England (Great Britain)?" },
        { value: 1000, q: "Abraham Lincoln issued this proclamation, which freed enslaved people in Confederate states during the Civil War.", a: "What is the Emancipation Proclamation?" }
      ],
      medium: [
        { value: 200,  q: "The first president of the United States.", a: "Who is George Washington?" },
        { value: 400,  q: "The Declaration of Independence was signed in this year.", a: "What is 1776?" },
        { value: 600,  q: "Neil Armstrong became the first person to walk on the moon in this year.", a: "What is 1969?" },
        { value: 800,  q: "Lincoln issued this document in 1863 to declare enslaved people in Confederate states to be free.", a: "What is the Emancipation Proclamation?" },
        { value: 1000, q: "The first 10 amendments to the U.S. Constitution are collectively known as this.", a: "What is the Bill of Rights?" }
      ],
      hard: [
        { value: 200,  q: "This 1803 land deal with France roughly doubled the size of the United States.", a: "What is the Louisiana Purchase?" },
        { value: 400,  q: "This 1954 Supreme Court case declared racial segregation in public schools unconstitutional.", a: "What is Brown v. Board of Education?" },
        { value: 600,  q: "The political belief that the United States was destined to expand westward and fill the entire North American continent.", a: "What is Manifest Destiny?" },
        { value: 800,  q: "The period from 1920 to 1933 when the production and sale of alcohol was banned across the United States.", a: "What is Prohibition?" },
        { value: 1000, q: "The treaty signed in Belgium in 1814 that officially ended the War of 1812 between the United States and Britain.", a: "What is the Treaty of Ghent?" }
      ]
    }
  },

  // ── 14. SUPERHEROES ──────────────────────────────────────────────────────
  {
    name: "Superheroes",
    questions: {
      easy: [
        { value: 200,  q: "The color of the Hulk's skin when he transforms.", a: "What is green?" },
        { value: 400,  q: "Spider-Man gained his powers after being bitten by this creature.", a: "What is a (radioactive) spider?" },
        { value: 600,  q: "This superhero is known as the 'Man of Steel' and can fly.", a: "Who is Superman?" },
        { value: 800,  q: "This superhero carries a magic hammer called Mjolnir.", a: "Who is Thor?" },
        { value: 1000, q: "Batman lives and trains in a secret underground base beneath Wayne Manor called the ___.", a: "What is the Batcave?" }
      ],
      medium: [
        { value: 200,  q: "Spider-Man's real name.", a: "Who is Peter Parker?" },
        { value: 400,  q: "Batman's fictional home city.", a: "What is Gotham City?" },
        { value: 600,  q: "This superhero is the king of the fictional African nation of Wakanda.", a: "Who is Black Panther (T'Challa)?" },
        { value: 800,  q: "Before becoming the Hulk, this scientist was exposed to a massive dose of gamma radiation.", a: "Who is Bruce Banner?" },
        { value: 1000, q: "This superhero team includes Iron Man, Captain America, Thor, Black Widow, Hawkeye, and the Hulk.", a: "Who are the Avengers?" }
      ],
      hard: [
        { value: 200,  q: "Thanos sought to collect all six of these magical objects to wipe out half of all life in the universe.", a: "What are the Infinity Stones?" },
        { value: 400,  q: "Clark Kent is the mild-mannered, bespectacled secret identity of this superhero.", a: "Who is Superman?" },
        { value: 600,  q: "This Avenger uses a bow and arrow as his primary weapon in battle.", a: "Who is Hawkeye (Clint Barton)?" },
        { value: 800,  q: "Captain America's shield is made of this rare fictional metal, the same material found in the nation of Wakanda.", a: "What is vibranium?" },
        { value: 1000, q: "This DC speedster and founding Justice League member can run at superhuman speeds — his real name is Barry Allen.", a: "Who is The Flash?" }
      ]
    }
  },

  // ── 15. LATTER-DAY PROPHETS ───────────────────────────────────────────────
  {
    name: "Latter-day Prophets",
    questions: {
      easy: [
        { value: 200,  q: "The name of the current prophet of the Church of Jesus Christ of Latter-day Saints.", a: "Who is Dallin H. Oaks?" },
        { value: 400,  q: "The name of the prophet who translated the Book of Mormon.", a: "Who is Joseph Smith?" },
        { value: 600,  q: "Joseph Smith was this many years old when he had his First Vision in the Sacred Grove.", a: "What is 14?" },
        { value: 800,  q: "This prophet led the pioneer Saints from Nauvoo across the plains to the Salt Lake Valley.", a: "Who is Brigham Young?" },
        { value: 1000, q: "This Church president oversaw the construction of more temples than any other prophet in Church history.", a: "Who is Gordon B. Hinckley?" }
      ],
      medium: [
        { value: 200,  q: "The current prophet and president of the Church of Jesus Christ of Latter-day Saints.", a: "Who is Dallin H. Oaks?" },
        { value: 400,  q: "Joseph Smith was this many years old when he had his First Vision.", a: "What is 14?" },
        { value: 600,  q: "This second president of the Church led the Saints across the plains to the Salt Lake Valley.", a: "Who is Brigham Young?" },
        { value: 800,  q: "Gordon B. Hinckley oversaw the construction of more of these than any other prophet in Church history.", a: "What are temples?" },
        { value: 1000, q: "This prophet received the revelation in 1978 extending the priesthood to all worthy male members.", a: "Who is Spencer W. Kimball?" }
      ],
      hard: [
        { value: 200,  q: "Before becoming Church president, Russell M. Nelson was a pioneering surgeon in this medical specialty.", a: "What is cardiovascular (or open-heart) surgery?" },
        { value: 400,  q: "This prophet served the longest as Church president — approximately 30 years, from 1847 to 1877.", a: "Who is Brigham Young?" },
        { value: 600,  q: "Gordon B. Hinckley served as Church president from 1995 until his death in this year.", a: "What is 2008?" },
        { value: 800,  q: "The Manifesto officially ending the practice of plural marriage was issued by this prophet in 1890.", a: "Who is Wilford Woodruff?" },
        { value: 1000, q: "This Church president formally introduced the welfare program in 1936 to help members suffering during the Great Depression.", a: "Who is Heber J. Grant?" }
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
    category: "The Old Testament",
    q: "This prophet called fire down from heaven to defeat 450 priests of Baal on Mount Carmel, then fled in fear from Queen Jezebel into the wilderness.",
    a: "Who is Elijah?"
  },
  {
    category: "Sports Records",
    q: "This player held the NBA all-time scoring record for 38 years — from 1984 until LeBron James finally broke it in 2023.",
    a: "Who is Kareem Abdul-Jabbar?"
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
    category: "Film History",
    q: "This 1937 Walt Disney film was the first feature-length hand-drawn animated movie ever produced, and it nearly bankrupted the studio before becoming a massive hit.",
    a: "What is Snow White and the Seven Dwarfs?"
  },
  {
    category: "Church Doctrine",
    q: "This divine attribute, unique to Latter-day Saint theology, holds that God the Father has a perfected, tangible body of flesh and bones.",
    a: "What is the corporeality of God (or that God has a physical body)?"
  },
  {
    category: "World Geography",
    q: "Vatican City, the world's smallest country by area, is located entirely within this European capital city.",
    a: "What is Rome?"
  },
  {
    category: "Science",
    q: "The abbreviation DNA stands for this full scientific name — the molecule that carries genetic instructions in all living organisms.",
    a: "What is deoxyribonucleic acid?"
  }
];
