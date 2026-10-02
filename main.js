"use strict";
const englishTranslations = {
    "title.home": "TPSite",
    "title.editor": "TPSite - wEditor",
    "title.kernel": "TPSite - Demowinter/UnityKernel",
    "title.stresser": "TPSite - wStresser",
    "meta.home": "Open-source projects by TheProjectDark, including wEditor, Demowinter/UnityKernel and wStresser.",
    "meta.editor": "wEditor is a lightweight, cross-platform text and code editor focused on simplicity and speed.",
    "meta.kernel": "Demowinter/UnityKernel is an open-source C++ kernel project for x86, x86-64 and AArch64.",
    "meta.stresser": "wStresser is a free, open-source and cross-platform stress testing tool made with C++ and wxWidgets.",
    "common.toggleNavigation": "Toggle navigation",
    "common.mainNavigation": "Main navigation",
    "common.chooseLanguage": "Choose language",
    "common.home": "Home",
    "common.copyright": "© 2026 TPSite by TheProjectDark",
    "common.description": "Description",
    "common.screenshots": "Screenshots",
    "common.repository": "Repository",
    "common.releases": "Releases",
    "common.and": " and ",
    "home.intro": "Welcome to the TP Site! Here you can find information about our open-source projects, including details, screenshots and downloads.",
    "home.projects": "Projects",
    "home.editor": "A lightweight, cross-platform text and code editor focused on simplicity and speed.",
    "home.kernel": "An open-source C++ kernel project for x86, x86-64 and AArch64.",
    "home.stresser": "A free, cross-platform tool for stress testing systems.",
    "editor.descriptionBefore": "wEditor - a free, open-source and cross-platform text and code editor made with C++ and the ",
    "editor.descriptionMiddle": " library. It is a native application that starts instantly, uses minimal memory and needs no installation - just download the binary and run it. Goals of the project: simplicity, speed and being lightweight. Currently wEditor is in beta - it is functional, but may contain bugs and unfinished features. The editor is designed and developed only by ",
    "editor.featuresTitle": "Features",
    "editor.feature1": "Syntax highlighting",
    "editor.feature2": "Lightweight and fast - tiny footprint, no runtime needed",
    "editor.feature3": "Cross-platform - Linux, Windows and macOS",
    "editor.feature4": "Portable - no installation required",
    "editor.feature5": "File management - New, Open, Save and Save As",
    "editor.feature6": "Undo / Redo",
    "editor.feature7": "Autosave on exit (can be disabled in Preferences)",
    "editor.feature8": "Preferences panel",
    "editor.feature9": "Line margin",
    "editor.altMac": "wEditor on macOS",
    "editor.altLinux": "wEditor on Linux",
    "editor.altWindows11": "wEditor on Windows 11",
    "editor.altWindows7": "wEditor on Windows 7",
    "editor.platformsTitle": "Supported platforms",
    "editor.platform": "Platform",
    "editor.architecture": "Architecture",
    "editor.macosPlatform": "macOS 12+ (Monterey and newer)",
    "editor.downloadsTitle": "Downloads",
    "editor.downloadsDescription": "There you can find runnable binaries - just download and launch!",
    "editor.downloadButton": "DOWNLOAD",
    "editor.repositoryBefore": "You can find the source code and pre-built applications on ",
    "editor.repositoryMiddle": " (see the ",
    "editor.repositoryAfter": " page). wEditor is licensed under the GNU General Public License v3.0. Contributions, bug reports and suggestions are welcome!",
    "kernel.descriptionBefore": "Demowinter/UnityKernel - a free and open-source kernel made with C++. Our goal is to make a hybrid unix-compatible kernel for x86, x86-64 and AArch64 architectures. Currently the project is indev and contains only some basics like x86 BIOS support, shell, some basic I/O, basic command and FAT32 fs (currently works only in RamDisk). The kernel is being created and developed by 2 developers: ",
    "kernel.repositoryBefore": "You can find the repository of the project on ",
    "kernel.repositoryAfter": ". The kernel is open-source and free to use, modify and distribute.",
    "kernel.altStartup": "UnityKernel startup screen",
    "kernel.altShell": "UnityKernel shell",
    "stresser.descriptionBefore": "wStresser - a free, open-source and cross-platform stress testing tool made with C++ and the ",
    "stresser.descriptionMiddle": " library. Currently wStresser is in beta - it is functional, but may contain bugs and unfinished features. The tool is designed and developed only by "
};
const russianTranslations = {
    "title.home": "TPSite",
    "title.editor": "TPSite — wEditor",
    "title.kernel": "TPSite — Demowinter/UnityKernel",
    "title.stresser": "TPSite — wStresser",
    "meta.home": "Открытые проекты TheProjectDark: wEditor, Demowinter/UnityKernel и wStresser.",
    "meta.editor": "wEditor — лёгкий кроссплатформенный редактор текста и кода, созданный с упором на простоту и скорость.",
    "meta.kernel": "Demowinter/UnityKernel — проект ядра с открытым исходным кодом на C++ для x86, x86-64 и AArch64.",
    "meta.stresser": "wStresser — бесплатная кроссплатформенная программа для стресс-тестирования, созданная на C++ и wxWidgets.",
    "common.toggleNavigation": "Открыть или закрыть меню",
    "common.mainNavigation": "Главное меню",
    "common.chooseLanguage": "Выбрать язык",
    "common.home": "Главная",
    "common.copyright": "© 2026 TPSite от TheProjectDark",
    "common.description": "Описание",
    "common.screenshots": "Скриншоты",
    "common.repository": "Репозиторий",
    "common.releases": "Релизы",
    "common.and": " и ",
    "home.intro": "Добро пожаловать на сайт TP! Здесь вы найдёте информацию о наших проектах с открытым исходным кодом: описания, скриншоты и загрузки.",
    "home.projects": "Проекты",
    "home.editor": "Лёгкий кроссплатформенный редактор текста и кода, созданный с упором на простоту и скорость.",
    "home.kernel": "Проект ядра с открытым исходным кодом на C++ для архитектур x86, x86-64 и AArch64.",
    "home.stresser": "Бесплатная кроссплатформенная программа для стресс-тестирования систем.",
    "editor.descriptionBefore": "wEditor — бесплатный кроссплатформенный редактор текста и кода с открытым исходным кодом, написанный на C++ с использованием ",
    "editor.descriptionMiddle": ". Это нативное приложение, которое быстро запускается, потребляет мало памяти и не требует установки — достаточно скачать и запустить исполняемый файл. Цели проекта — простота, скорость и лёгкость. Сейчас wEditor находится в бета-версии: программа уже работает, но может содержать ошибки и незавершённые функции. Разработкой редактора занимается только ",
    "editor.featuresTitle": "Возможности",
    "editor.feature1": "Подсветка синтаксиса",
    "editor.feature2": "Лёгкий и быстрый — занимает мало места и не требует среды выполнения",
    "editor.feature3": "Кроссплатформенность — Linux, Windows и macOS",
    "editor.feature4": "Портативность — установка не требуется",
    "editor.feature5": "Работа с файлами — создание, открытие, сохранение и «Сохранить как»",
    "editor.feature6": "Отмена и повтор действий",
    "editor.feature7": "Автосохранение при выходе (можно отключить в настройках)",
    "editor.feature8": "Панель настроек",
    "editor.feature9": "Поле номеров строк",
    "editor.altMac": "wEditor в macOS",
    "editor.altLinux": "wEditor в Linux",
    "editor.altWindows11": "wEditor в Windows 11",
    "editor.altWindows7": "wEditor в Windows 7",
    "editor.platformsTitle": "Поддерживаемые платформы",
    "editor.platform": "Платформа",
    "editor.architecture": "Архитектура",
    "editor.macosPlatform": "macOS 12+ (Monterey и новее)",
    "editor.downloadsTitle": "Загрузки",
    "editor.downloadsDescription": "Здесь можно скачать готовые приложения — просто загрузите и запустите!",
    "editor.downloadButton": "СКАЧАТЬ",
    "editor.repositoryBefore": "Исходный код и готовые приложения доступны на ",
    "editor.repositoryMiddle": " (смотрите страницу ",
    "editor.repositoryAfter": "). wEditor распространяется по лицензии GNU General Public License v3.0. Будем рады вашему участию, сообщениям об ошибках и предложениям!",
    "kernel.descriptionBefore": "Demowinter/UnityKernel — бесплатное ядро с открытым исходным кодом, написанное на C++. Цель проекта — создать гибридное Unix-совместимое ядро для x86, x86-64 и AArch64. Сейчас проект находится в разработке и включает базовые возможности: поддержку BIOS на x86, оболочку, базовый ввод-вывод, простые команды и файловую систему FAT32 (пока работает только в RAM-диске). Ядро разрабатывают два участника: ",
    "kernel.repositoryBefore": "Репозиторий проекта находится на ",
    "kernel.repositoryAfter": ". Ядро имеет открытый исходный код и доступно для использования, изменения и распространения.",
    "kernel.altStartup": "Экран запуска UnityKernel",
    "kernel.altShell": "Оболочка UnityKernel",
    "stresser.descriptionBefore": "wStresser — бесплатная кроссплатформенная программа для стресс-тестирования с открытым исходным кодом, написанная на C++ с использованием ",
    "stresser.descriptionMiddle": ". Сейчас wStresser находится в бета-версии: программа уже работает, но может содержать ошибки и незавершённые функции. Разработкой занимается только "
};
const germanTranslations = {
    "title.home": "TPSite",
    "title.editor": "TPSite — wEditor",
    "title.kernel": "TPSite — Demowinter/UnityKernel",
    "title.stresser": "TPSite — wStresser",
    "meta.home": "Open-Source-Projekte von TheProjectDark: wEditor, Demowinter/UnityKernel und wStresser.",
    "meta.editor": "wEditor ist ein leichter, plattformübergreifender Text- und Codeeditor mit Fokus auf Einfachheit und Geschwindigkeit.",
    "meta.kernel": "Demowinter/UnityKernel ist ein Open-Source-Kernelprojekt in C++ für x86, x86-64 und AArch64.",
    "meta.stresser": "wStresser ist ein kostenloses, plattformübergreifendes Stresstest-Tool mit C++ und wxWidgets.",
    "common.toggleNavigation": "Navigation umschalten",
    "common.mainNavigation": "Hauptnavigation",
    "common.chooseLanguage": "Sprache auswählen",
    "common.home": "Startseite",
    "common.copyright": "© 2026 TPSite von TheProjectDark",
    "common.description": "Beschreibung",
    "common.screenshots": "Screenshots",
    "common.repository": "Repository",
    "common.releases": "Versionen",
    "common.and": " und ",
    "home.intro": "Willkommen auf der TP-Website! Hier findest du Informationen zu unseren Open-Source-Projekten – darunter Beschreibungen, Screenshots und Downloads.",
    "home.projects": "Projekte",
    "home.editor": "Ein leichter, plattformübergreifender Text- und Codeeditor mit Fokus auf Einfachheit und Geschwindigkeit.",
    "home.kernel": "Ein Open-Source-Kernelprojekt in C++ für x86, x86-64 und AArch64.",
    "home.stresser": "Ein kostenloses, plattformübergreifendes Tool für Stresstests von Systemen.",
    "editor.descriptionBefore": "wEditor ist ein kostenloser, plattformübergreifender Text- und Codeeditor mit offenem Quellcode, entwickelt mit C++ und ",
    "editor.descriptionMiddle": ". Die native Anwendung startet schnell, benötigt wenig Speicher und muss nicht installiert werden – einfach herunterladen und starten. Das Projekt setzt auf Einfachheit, Geschwindigkeit und einen geringen Ressourcenbedarf. wEditor befindet sich derzeit in der Beta-Phase: Die Anwendung ist nutzbar, kann aber noch Fehler und unvollständige Funktionen enthalten. Der Editor wird ausschließlich von ",
    "editor.featuresTitle": "Funktionen",
    "editor.feature1": "Syntaxhervorhebung",
    "editor.feature2": "Schlank und schnell – geringer Speicherbedarf, keine Laufzeitumgebung erforderlich",
    "editor.feature3": "Plattformübergreifend – Linux, Windows und macOS",
    "editor.feature4": "Portabel – keine Installation erforderlich",
    "editor.feature5": "Dateiverwaltung – Neu, Öffnen, Speichern und Speichern unter",
    "editor.feature6": "Rückgängig / Wiederholen",
    "editor.feature7": "Automatisches Speichern beim Beenden (in den Einstellungen deaktivierbar)",
    "editor.feature8": "Einstellungsfenster",
    "editor.feature9": "Zeilennummernleiste",
    "editor.altMac": "wEditor unter macOS",
    "editor.altLinux": "wEditor unter Linux",
    "editor.altWindows11": "wEditor unter Windows 11",
    "editor.altWindows7": "wEditor unter Windows 7",
    "editor.platformsTitle": "Unterstützte Plattformen",
    "editor.platform": "Plattform",
    "editor.architecture": "Architektur",
    "editor.macosPlatform": "macOS 12+ (Monterey und neuer)",
    "editor.downloadsTitle": "Downloads",
    "editor.downloadsDescription": "Hier findest du ausführbare Dateien – einfach herunterladen und starten!",
    "editor.downloadButton": "HERUNTERLADEN",
    "editor.repositoryBefore": "Quellcode und fertige Anwendungen findest du auf ",
    "editor.repositoryMiddle": " (siehe die Seite ",
    "editor.repositoryAfter": "). wEditor steht unter der GNU General Public License v3.0. Beiträge, Fehlermeldungen und Vorschläge sind willkommen!",
    "kernel.descriptionBefore": "Demowinter/UnityKernel ist ein kostenloser Open-Source-Kernel in C++. Ziel ist ein hybrider, Unix-kompatibler Kernel für x86, x86-64 und AArch64. Das Projekt befindet sich noch in der Entwicklung und bietet derzeit grundlegende Funktionen wie x86-BIOS-Unterstützung, eine Shell, einfache Ein-/Ausgabe, Basisbefehle und ein FAT32-Dateisystem (funktioniert derzeit nur in einer RAM-Disk). Der Kernel wird von zwei Entwicklern erstellt: ",
    "kernel.repositoryBefore": "Das Repository des Projekts findest du auf ",
    "kernel.repositoryAfter": ". Der Kernel ist Open Source und darf kostenlos genutzt, geändert und weitergegeben werden.",
    "kernel.altStartup": "UnityKernel-Startbildschirm",
    "kernel.altShell": "UnityKernel-Shell",
    "stresser.descriptionBefore": "wStresser ist ein kostenloses, plattformübergreifendes Stresstest-Tool mit offenem Quellcode, entwickelt mit C++ und ",
    "stresser.descriptionMiddle": ". wStresser befindet sich derzeit in der Beta-Phase: Das Tool ist nutzbar, kann aber noch Fehler und unvollständige Funktionen enthalten. Entwickelt wird es ausschließlich von "
};
const translations = {
    en: englishTranslations,
    ru: russianTranslations,
    de: germanTranslations
};
function isLanguage(value) {
    return value === "en" || value === "ru" || value === "de";
}
function isTranslationKey(value) {
    return value !== undefined && Object.prototype.hasOwnProperty.call(englishTranslations, value);
}
const languageButtons = document.querySelectorAll("[data-language]");
const storedLanguage = localStorage.getItem("tpsite-language");
const initialLanguage = isLanguage(storedLanguage) ? storedLanguage : "en";
function setLanguage(language) {
    const dictionary = translations[language];
    document.documentElement.lang = language;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        if (isTranslationKey(key)) {
            element.textContent = dictionary[key];
        }
    });
    document.querySelectorAll("[data-i18n-content]").forEach((element) => {
        const key = element.dataset.i18nContent;
        if (isTranslationKey(key)) {
            element.content = dictionary[key];
        }
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
        const key = element.dataset.i18nAria;
        if (isTranslationKey(key)) {
            element.setAttribute("aria-label", dictionary[key]);
        }
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
        const key = element.dataset.i18nAlt;
        if (isTranslationKey(key)) {
            element.setAttribute("alt", dictionary[key]);
        }
    });
    languageButtons.forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.language === language));
    });
    localStorage.setItem("tpsite-language", language);
}
languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const language = button.dataset.language;
        if (isLanguage(language)) {
            setLanguage(language);
        }
    });
});
setLanguage(initialLanguage);
const btn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
if (btn && sidebar) {
    btn.addEventListener("click", () => {
        const isOpen = sidebar.classList.toggle("active");
        btn.setAttribute("aria-expanded", String(isOpen));
    });
    document.addEventListener("click", (e) => {
        const target = e.target;
        if (target instanceof Node && !sidebar.contains(target) && target !== btn) {
            sidebar.classList.remove("active");
            btn.setAttribute("aria-expanded", "false");
        }
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            sidebar.classList.remove("active");
            btn.setAttribute("aria-expanded", "false");
        }
    });
}
