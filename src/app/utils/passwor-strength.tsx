export function getPasswordStrength(password: string): number {
    let score = 0;
    if (!password) return 0;

    // 1. Longueur (La base)
    if (password.length >= 8) score++;
    if (password.length >= 12) score++; // Bonus pour les mots de passe longs

    // 2. Diversité des caractères (Regex)
    if (/[A-Z]/.test(password)) score++; // Contient une majuscule
    if (/[0-9]/.test(password)) score++; // Contient un chiffre
    if (/[^A-Za-z0-9]/.test(password)) score++; // Contient un caractère spécial (@, $, !, etc.)

    // On plafonne le score à 4 pour correspondre à tes 4 segments ou 100%
    return score;
}