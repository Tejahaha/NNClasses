const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components', 'landing_components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
    const filePath = path.join(componentsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // 1. Remove const B declaration
    content = content.replace(/const B = \{[\s\S]*?\};(\r?\n)?/g, '');

    // 2. Map B. properties to CSS var()
    // For style objects: `color: B.primary` -> `color: 'var(--color-dark)'`
    // For template literals: `${B.primary}` -> `var(--color-dark)`

    const map = {
        'B.primary': 'var(--color-dark)',
        'B.secondary': 'var(--color-accent)',
        'B.light': 'var(--color-mid-light)',
        'B.dark': 'var(--color-darker)',
        'B.gold': 'var(--color-gold)',
        'B.goldLight': 'var(--color-gold-light)',
        'B.goldYellow': 'var(--color-gold-yellow)'
    };

    for (const [key, val] of Object.entries(map)) {
        // Replace inside template literals first: `${B.primary}` -> `var(--color-dark)`
        // Remembering to escape the backslash and brackets in the RegExp
        const escapedKey = key.replace('.', '\\.');
        content = content.replace(new RegExp(`\\$\\{${escapedKey}\\}`, 'g'), val);

        // Replace everywhere else: `B.primary` -> `'var(--color-dark)'`
        // Ensure we don't accidentally do it inside already replaced strings, but since keys are unique it's fine
        content = content.replace(new RegExp(`\\b${escapedKey}\\b`, 'g'), `'${val}'`);
    }

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${file}`);
    }
});
