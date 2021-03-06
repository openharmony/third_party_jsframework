import { paramMock } from "../utils"

export function mockIntl() {
    const result = {
        DateTimeFormat: function(...args) {
            console.warn("url.URLSearchParams interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return DateTimeFormatMock;
        },
        NumberFormat: function(...args) {
            console.warn("url.URL interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return NumberFormatMoc;
        },
        Locale: function(locale) {
            console.warn("url.URL interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return LocaleMock;
        }
    }
    const DateTimeFormatMock = {
        format: function(date) {
            console.warn("Intl.DateTimeFormat.format interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.");
            return paramMock.paramStringMock;
        },
        formatRange: function(startDate, endDate) {
            console.warn("Intl.DateTimeFormat.format interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.");
            return paramMock.paramStringMock;
        },
        resolvedOptions: function() {
            console.warn("Intl.DateTimeFormat.resolvedOptions interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.");
            return DateTimeOptionsMock;
        }
    }
    const NumberFormatMoc = {
        format: function(number) {
            console.warn("Intl.NumberFormat.format interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.");
            return paramMock.paramStringMock;
        },
        resolvedOptions: function() {
            console.warn("Intl.NumberFormat.resolvedOptions interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.");
            return NumberOptionsMock;
        }
    }
    const LocaleMock = {
        language: '[PC preview] unknow language',
        script: '[PC preview] unknow script',
        region: '[PC preview] unknow region',
        baseName: '[PC preview] unknow baseName',
        caseFirst: '[PC preview] unknow caseFirst',
        calendar: '[PC preview] unknow calendar',
        collation: '[PC preview] unknow collation',
        hourCycle: '[PC preview] unknow hourCycle',
        numberingSystem: '[PC preview] unknow numberingSystem',
        numeric: '[PC preview] unknow numeric',
        toString: function() {
            console.warn("Intl.Locale.toString interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.");
            return paramMock.paramStringMock;
        },
        maximize: function() {
            console.warn("Intl.Locale.maximize interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.");
            return LocaleMock;
        },
        minimize: function() {
            console.warn("Intl.Locale.minimize interface mocked in the Previewer. How this interface works on the" +
            " Previewer may be different from that on a real device.");
            return LocaleMock;
        }
    }
    const DateTimeOptionsMock = {
        locale: '[PC preview] unknow locale',
        dateStyle: '[PC preview] unknow dateStyle',
        timeStyle: '[PC preview] unknow timeStyle',
        hourCycle: '[PC preview] unknow hourCycle',
        timeZone: '[PC preview] unknow timeZone',
        numberingSystem: '[PC preview] unknow numberingSystem',
        hour12: '[PC preview] unknow hour12',
        weekday: '[PC preview] unknow weekday',
        era: '[PC preview] unknow era',
        year: '[PC preview] unknow year',
        month: '[PC preview] unknow month',
        day: '[PC preview] unknow day',
        hour: '[PC preview] unknow hour',
        minute: '[PC preview] unknow minute',
        second: '[PC preview] unknow second',
        timeZoneName: '[PC preview] unknow timeZoneName',
        dayPeriod: '[PC preview] unknow dayPeriod',
        localeMatcher: '[PC preview] unknow localeMatcher',
        formatMatcher: '[PC preview] unknow formatMatcher',
    }
    const NumberOptionsMock = {
        locale: '[PC preview] unknow locale',
        currency: '[PC preview] unknow currency',
        currencySign: '[PC preview] unknow currencySign',
        currencyDisplay: '[PC preview] unknow currencyDisplay',
        unit: '[PC preview] unknow unit',
        unitDisplay: '[PC preview] unknow unitDisplay',
        signDisplay: '[PC preview] unknow signDisplay',
        compactDisplay: '[PC preview] unknow compactDisplay',
        notation: '[PC preview] unknow notation',
        localeMatcher: '[PC preview] unknow localeMatcher',
        style: '[PC preview] unknow style',
        numberingSystem: '[PC preview] unknow numberingSystem',
        useGrouping: '[PC preview] unknow useGrouping',
        minimumIntegerDigits: '[PC preview] unknow minimumIntegerDigits',
        minimumFractionDigits: '[PC preview] unknow minimumFractionDigits',
        maximumFractionDigits: '[PC preview] unknow maximumFractionDigits',
        minimumSignificantDigits: '[PC preview] unknow minimumSignificantDigits',
        maximumSignificantDigits: '[PC preview] unknow maximumSignificantDigits',
    }
    return result;
}