export function formatPhoneNumberUKWithCountryCode(phone) {
    // Remove all non-digit characters except '+'
    let cleaned = phone.replace(/[^\d+]/g, '');

    // Normalize to start with +44
    if (cleaned.startsWith('0')) {
        cleaned = '+44' + cleaned.slice(1);
    } else if (cleaned.startsWith('44')) {
        cleaned = '+44' + cleaned.slice(2);
    }

    // Remove + for formatting, keep separately
    const countryCode = '+44';
    let number = cleaned.replace('+44', '');

    // Format mobile numbers: +44 7XXX XXX XXX
    if (/^7\d{9}$/.test(number)) {
        return `${countryCode} ${number.replace(/^(\d{3})(\d{3})(\d{3})$/, '$1 $2 $3')}`;
    }

    // Format landline numbers: +44 20 XXXX XXXX or +44 1XXX XXX XXX
    if (/^20\d{8}$/.test(number)) {
        return `${countryCode} ${number.replace(/^(\d{2})(\d{4})(\d{4})$/, '$1 $2 $3')}`;
    } else if (/^1\d{9}$/.test(number)) {
        return `${countryCode} ${number.replace(/^(\d{4})(\d{3})(\d{3})$/, '$1 $2 $3')}`;
    }

    // Fallback: group digits
    return `${countryCode} ${number}`;
}