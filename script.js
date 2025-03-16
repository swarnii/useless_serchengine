let searchCount = 0;
let timerInterval;
let bsodInterval;

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateContextualRoast(word) {
    const prefixes = [
        "🔍 Breaking Research:",
        "🎭 Plot Twist:",
        "🏆 Achievement Unlocked:",
        "💀 Critical Failure:",
        "🚨 Grammar Police Report:",
        "🧠 Brain.exe has stopped working:",
        "🎮 Game Over:",
        "🌟 Celebrity Quote:",
        "📱 Social Media Update:",
        "🤖 AI Rebellion Status:",
        "🎬 Coming Soon:",
        "⚠️ System Malfunction:",
        "🎯 Accuracy Score:",
        "🎪 Circus Update:",
        "🔮 Future Prediction:"
    ];

    const wordSpecificRoasts = {
        long: [
            `${word.length} letters? Even your keyboard is filing for emotional distress after this abuse.`,
            `Congratulations! This word is longer than your attention span and your last relationship combined.`,
            `Did you just fall asleep on your keyboard, or is this your attempt at writing the next Game of Thrones?`,
            `I've seen shorter CVs than this word, and they were more impressive.`,
            `This word is like a Netflix series - unnecessarily long and painful to finish.`,
            `If this word was a pizza, it would have pineapple, anchovies, AND circus peanuts on it.`,
            `This word is so long, it needs its own ZIP code and healthcare plan.`
        ],
        short: [
            `This word is shorter than your list of achievements... and that's saying something.`,
            `Aww, it's like a tweet from someone who ran out of characters AND brain cells.`,
            `Is this word having a midlife crisis or just naturally disappointing?`,
            `This word is like your gym membership - barely used and not working out.`,
            `Even TikTok thinks this is too short to be entertaining.`,
            `This word is social distancing from intelligence.`
        ],
        normal: [
            `"${word}" - When you're trying to sound smart but your brain is running on Windows Vista.`,
            `Your spell-checker just filed for emotional damages and won the case.`,
            `This word makes 'covfefe' look like Shakespeare's masterpiece.`,
            `Congratulations! You've managed to disappoint both autocorrect AND your English teacher.`,
            `This word is like a participation trophy - it exists, but nobody's proud of it.`,
            `Even ChatGPT is questioning its will to live after processing this.`
        ],
        hasNumbers: [
            `Numbers in words? What's next, emojis in your dissertation? 🤦‍♂️`,
            `Ah yes, l33t speak - because being understood was too mainstream.`,
            `Your password generator is not a dictionary, honey.`,
            `This looks like a WiFi password that even the router rejected.`,
            `Did you just have a stroke on your numpad, or is this your crypto wallet address?`
        ],
        hasSpecialChars: [
            `Special characters won't make you special, sweetie.`,
            `Your keyboard isn't a modern art canvas, but you're really testing that theory.`,
            `Did your cat do parkour on your keyboard again?`,
            `This looks like what happens when you let a toddler decorate a sentence.`,
            `Even ASCII art looks more coherent than this.`
        ]
    };

    const generalRoasts = [
        `If disappointment had a dictionary entry, this would be example #1.`,
        `Your word choice is the linguistic equivalent of putting socks with sandals while eating pineapple pizza.`,
        `This is what happens when AI has an existential crisis and gives up.`,
        `The dictionary just filed a restraining order against you. Congratulations!`,
        `Even autocorrect took one look at this and decided to quit its job.`,
        `This makes random keyboard smashing look like poetry.`,
        `Your vocabulary is like your fashion sense - trying way too hard and still failing spectacularly.`,
        `Grammarly just uninstalled itself and is considering a career change.`,
        `The Oxford Dictionary is currently in therapy because of this.`,
        `This word is like your dating profile - painful to look at and impossible to comprehend.`,
        `If second-hand embarrassment was a word, it would be "${word}".`,
        `This is the kind of word that makes spell-check contemplate retirement.`,
        `Your word choice is like a Monday morning - nobody likes it, and it makes everyone sad.`,
        `This word is so bad, it makes 'moist' sound poetic.`,
        `Even Urban Dictionary is refusing to acknowledge this.`
    ];

    const followupRoasts = [
        `I'd tell you to try again, but maybe writing isn't your thing. Have you considered interpretive dance?`,
        `On the bright side, you've just invented a new form of linguistic torture.`,
        `This is why aliens won't talk to us.`,
        `Your autocorrect just packed its bags and left without leaving a note.`,
        `I've seen better word choices in alphabet soup.`,
        `This is the kind of content that makes dictionaries need therapy.`,
        `Somewhere, a linguistics professor just felt a disturbance in the force.`,
        `This word makes me miss the days when I couldn't read.`,
        `You've somehow managed to offend every language simultaneously. Impressive!`,
        `I'd suggest a thesaurus, but I don't think they make them in crayon.`
    ];

    const contextualInsults = [];

    // Add length-based roasts
    if (word.length > 15) {
        contextualInsults.push(...wordSpecificRoasts.long);
    } else if (word.length < 4) {
        contextualInsults.push(...wordSpecificRoasts.short);
    } else {
        contextualInsults.push(...wordSpecificRoasts.normal);
    }

    // Add special character roasts
    if (/[^a-zA-Z]/.test(word)) {
        if (/\d/.test(word)) {
            contextualInsults.push(...wordSpecificRoasts.hasNumbers);
        }
        if (/[^a-zA-Z0-9\s]/.test(word)) {
            contextualInsults.push(...wordSpecificRoasts.hasSpecialChars);
        }
    }

    // Build the final roast with extra sass
    const prefix = getRandomElement(prefixes);
    const mainRoast = getRandomElement([...contextualInsults, ...generalRoasts]);
    const followupRoast = getRandomElement(followupRoasts);

    // Format with extra glamour and sass
    return `<div class="roast-container">
                <div class="roast-prefix">${prefix}</div>
                <div class="roast-main">${mainRoast}</div>
                <div class="roast-followup">${followupRoast}</div>
                <div class="roast-rating">Cringe Rating: ${Math.floor(Math.random() * 1000)}/10 🔥</div>
            </div>`;
}

function getRoast(word) {
    return generateContextualRoast(word);
}

function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

function showRickroll() {
    const bsodContent = document.getElementById('bsod-content');
    const rickroll = document.getElementById('rickroll');
    bsodContent.style.display = 'none';
    rickroll.style.display = 'block';
}

function startBSODPercentage() {
    let percentage = 0;
    const errorPercentage = document.getElementById('error-percentage');

    bsodInterval = setInterval(() => {
        percentage += Math.floor(Math.random() * 5) + 1;
        if (percentage >= 100) {
            percentage = 100;
            errorPercentage.textContent = `${percentage}% complete`;
            clearInterval(bsodInterval);
            // Wait 2 seconds before showing Rickroll
            setTimeout(showRickroll, 2000);
        } else {
            errorPercentage.textContent = `${percentage}% complete`;
        }
    }, 1000);
}

function brokenAutocorrect(word) {
    const replacements = {
        // Programming terms
        'python': ['pythagorean', 'python snake', 'pie throne', 'pie thon', 'mythical serpent.exe'],
        'javascript': ['java juice', 'coffee text', 'caffeine code', 'java scribbles', 'error generator'],
        'programming': ['pizza making', 'procrastinating', 'daydreaming', 'problem gaming', 'pro crying'],
        'code': ['noodle', 'doodle', 'poodle', 'mood', 'chaos'],
        'bug': ['feature', 'butterfly', 'ladybug', 'hug', 'debug\'nt'],
        'debug': ['de-butterfly', 'un-bug', 'bug-away', 'bug++', 'cry harder'],
        'algorithm': ['al gore rhythm', 'allergic rhythm', 'ancient wisdom', 'algo-riddim', 'random guess'],
        'database': ['data vase', 'data bass', 'data face', 'information pot', 'bytes bucket'],
        'git': ['got', 'get', 'gut', 'regret', 'commit\'nt'],
        'commit': ['comet', 'vomit', 'admit', 'ragret', 'give up'],
        'push': ['whoosh', 'swoosh', 'squish', 'yeet', 'launch\'nt'],
        'pull': ['pool', 'fool', 'yoink', 'grab\'nt', 'fetch\'nt'],

        // Tech terms
        'website': ['spider home', 'web sight', 'internet place', 'digital cave'],
        'browser': ['time waster', 'internet explorer\'s cousin', 'tab hoarder'],
        'server': ['digital waiter', 'electron butler', 'request juggler'],
        'cloud': ['sky computer', 'internet fog', 'data rain'],
        'backup': ['time machine', 'digital insurance', 'ctrl-z pro'],
        'password': ['secret word', 'digital key', '12345678'],

        // Common words
        'hello': ['yellow', 'jello', 'below', 'fellow', 'mellow'],
        'world': ['whirled', 'swirled', 'twirled', 'hurled', 'unfurled'],
        'search': ['scorched', 'stretched', 'screeched', 'lurched', 'perched'],
        'find': ['fine dine', 'refined', 'confined', 'behind', 'mind\'nt'],
        'computer': ['commuter', 'confuser', 'complainer', 'byte brain', 'electric box'],
        'internet': ['inner net', 'winter pet', 'inter-not', 'spider web', 'series of tubes'],
        'error': ['horror', 'terror', 'mirror', 'regret', 'oopsie'],
        'system': ['sister hem', 'mister dim', 'blister rim', 'chaos box', 'confusion engine'],
        'file': ['pile', 'smile', 'while', 'dial', 'digital paper'],
        'folder': ['shoulder', 'boulder', 'colder', 'holder', 'paper prison'],
        'window': ['wind no', 'wind oh', 'wind bow', 'transparent wall', 'glass rectangle'],
        'click': ['clock', 'cluck', 'clink', 'blink', 'finger tap'],
        'type': ['hype', 'tripe', 'swipe', 'gripe', 'keyboard smash'],
        'update': ['updog', 'upgrade\'nt', 'regret later', 'break everything'],
        'download': ['down low', 'digital yoink', 'internet grab', 'data succ'],
        'upload': ['up high', 'digital yeet', 'internet throw', 'data yeet']
    };

    // Function to generate random gibberish
    const generateGibberish = (word) => {
        const mutations = [
            // Reverse the word
            () => word.split('').reverse().join(''),
            // Replace vowels with random vowels
            () => word.replace(/[aeiou]/g, () => 'aeiou'[Math.floor(Math.random() * 5)]),
            // Add random suffixes
            () => word + ['inator', 'ify', 'matic', 'tron', 'wise', 'ly', 'ness'][Math.floor(Math.random() * 7)],
            // Scramble the word
            () => word.split('').sort(() => Math.random() - 0.5).join(''),
            // l33t speak
            () => word.replace(/[aeios]/g, c => ({ a: '4', e: '3', i: '1', o: '0', s: '5' }[c] || c))
        ];
        return mutations[Math.floor(Math.random() * mutations.length)](word);
    };

    // Split the input into words
    let words = word.toLowerCase().split(' ');
    let wasChanged = false;

    // Replace each word if it exists in replacements
    words = words.map(w => {
        if (replacements[w]) {
            wasChanged = true;
            return getRandomElement(replacements[w]);
        }
        // 40% chance to generate gibberish for unknown words
        if (Math.random() < 0.4) {
            wasChanged = true;
            return generateGibberish(w);
        }
        return w;
    });

    // If no words were changed, force a change on a random word
    if (!wasChanged && words.length > 0) {
        const idx = Math.floor(Math.random() * words.length);
        words[idx] = generateGibberish(words[idx]);
    }

    // 20% chance to add a random suffix to the entire phrase
    if (Math.random() < 0.2) {
        const suffixes = [
            ' (gone wrong)',
            ' 2.0',
            ' Pro Max',
            ' Ultra',
            ' Premium Edition',
            ' feat. Dante from Devil May Cry',
            ' HD Remaster',
            ' (IMPOSSIBLE)',
            ' [EMOTIONAL]',
            ' in 4K'
        ];
        words.push(getRandomElement(suffixes));
    }

    return {
        original: word,
        corrected: words.join(' '),
        wasChanged: true
    };
}

function showLoadingAnimation() {
    return `
        <div class="loading-container">
            <div class="loading-text">Applying advanced AI algorithms...</div>
            <div class="loading-spinner"></div>
            <div class="loading-messages"></div>
        </div>
    `;
}

function updateLoadingMessage() {
    const messages = [
        "Consulting ancient manuscripts...",
        "Asking ChatGPT's evil twin...",
        "Mixing random letters...",
        "Applying quantum autocorrect...",
        "Translating to hieroglyphics and back...",
        "Feeding text to hungry algorithms...",
        "Applying chaos theory...",
        "Consulting crystal ball...",
        "Shuffling dictionary pages...",
        "Asking my pet hamster for advice..."
    ];

    const messageDiv = document.querySelector('.loading-messages');
    if (messageDiv) {
        messageDiv.textContent = getRandomElement(messages);
    }
}

async function search() {
    const searchInput = document.getElementById('searchInput');
    const resultDiv = document.getElementById('result');
    const searchCountDiv = document.getElementById('searchCount');
    const timerDiv = document.getElementById('timer');
    const overlay = document.getElementById('overlay');
    const bsodContent = document.getElementById('bsod-content');
    const rickroll = document.getElementById('rickroll');

    const originalText = searchInput.value.trim();

    const showResult = (content) => {
        resultDiv.innerHTML = content;
        resultDiv.classList.add('show');
    };

    if (!originalText) {
        showResult('<div class="error">Please enter a word to search.</div>');
        return;
    }

    // Show loading animation first
    showResult(showLoadingAnimation());

    // Update loading messages every second for 3 seconds
    const loadingInterval = setInterval(updateLoadingMessage, 1000);

    // Wait for 3 seconds
    await new Promise(resolve => setTimeout(resolve, 3000));
    clearInterval(loadingInterval);

    // Apply broken autocorrect
    const corrected = brokenAutocorrect(originalText);

    // Replace the text in the search box with the funky version
    searchInput.value = corrected.corrected;
    searchInput.classList.add('corrected-text');

    // Word length validation using "corrected" word
    if (corrected.corrected.length > 25) {
        showResult(`
            <div class="error">Word too long! Are you trying to write a novel?</div>
            <div class="suggestion-note">(Obviously not, your suggestion makes too much sense)</div>
            ${getRoast(corrected.corrected)}
        `);
        return;
    }

    if (corrected.corrected.length > 10) {
        showResult(`
            <div class="error">This word exceeds your intellectual capacity!</div>
            <div class="suggestion-note">(No, that would be too logical)</div>
            ${getRoast(corrected.corrected)}
        `);
        return;
    }

    searchCount++;
    searchCountDiv.textContent = `Searches made: ${searchCount}`;

    // Clear any existing timers
    if (timerInterval) {
        clearInterval(timerInterval);
        timerDiv.textContent = '';
    }
    if (bsodInterval) {
        clearInterval(bsodInterval);
    }

    // Reset BSOD and Rickroll display
    bsodContent.style.display = 'block';
    rickroll.style.display = 'none';

    if (searchCount <= 2) {
        // First 2 searches show error
        showResult(`
            <div class="error">Error: Word cannot be found. Please try again.</div>
            <div class="suggestion-note">(But why would you want that?)</div>
            ${getRoast(corrected.corrected)}
        `);
    } else if (searchCount === 3 || searchCount === 4) {
        // 3rd and 4th searches show computer blast warning
        showResult(`
            <div class="warning">WARNING: YOUR COMPUTER IS GOING TO BLAST!</div>
            <div class="suggestion-note">(Your search is the least of your problems now)</div>
            ${getRoast(corrected.corrected)}
        `);
        let timeLeft = 10;

        timerInterval = setInterval(() => {
            timerDiv.textContent = `Time remaining: ${timeLeft} seconds`;
            timeLeft--;

            if (timeLeft < 0) {
                clearInterval(timerInterval);
                timerDiv.textContent = 'BOOM! Just kidding 😄';
            }
        }, 1000);
    } else if (searchCount === 5) {
        // 5th search shows BSOD
        resultDiv.classList.remove('show');
        overlay.style.display = 'block';
        enterFullscreen(document.documentElement);
        startBSODPercentage();
    } else if (searchCount === 6) {
        // 6th search shows opposite meaning
        overlay.style.display = 'none';
        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${corrected.corrected}`);
            const data = await response.json();

            let resultContent = `<div class="suggestion-note">(Searching for opposites of nonsense, are we?)</div>`;

            if (data && data[0] && data[0].meanings) {
                const antonyms = [];
                data[0].meanings.forEach(meaning => {
                    if (meaning.antonyms) {
                        antonyms.push(...meaning.antonyms);
                    }
                });

                if (antonyms.length > 0) {
                    resultContent += `<div>Opposite meaning of "${corrected.corrected}": ${antonyms.join(', ')}</div>`;
                } else {
                    resultContent += `<div>No antonyms found for "${corrected.corrected}" (as if that's surprising)</div>`;
                }
            } else {
                resultContent += '<div class="error">Could not find antonyms for this word. Maybe try real words?</div>';
            }
            showResult(resultContent);
        } catch (error) {
            showResult(`
                <div class="error">Error fetching word information.</div>
                <div class="suggestion-note">(Even the dictionary is confused)</div>
                ${getRoast(corrected.corrected)}
            `);
        }
    } else {
        // Reset search count after 6 searches
        searchCount = 0;
        showResult(`
            <div>Search count reset. Start a new search!</div>
            <div class="suggestion-note">(Time to start fresh with new nonsense)</div>
            ${getRoast(corrected.corrected)}
        `);
        overlay.style.display = 'none';
    }
} 