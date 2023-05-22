

export const languageEnglish = {
    formating:{
        'main': "Main Prompt",
        'jailbreak': "Jailbreak Prompt",
        'chats': "Past Chats",
        'lorebook': "Lorebook",
        'globalNote': "Global Note",
        'authorNote': "Author's Note",
        'lastChat': "Last Chat",
        "description": "Character Description"
    },
    errors:{
        toomuchtoken: 'Error: The minimum required token is greater than the Max Context Size.',
        unknownModel: 'Error: Unknown model selected',
        httpError: 'Error: error in request:',
        noData: 'There is no data in file, or the file is corrupted',
        onlyOneChat: 'There must be least one chat',
        alreadyCharInGroup: "There is already a character with the same name in the group."
    },
    help:{
        model: "Model option is a main model used in chat.",
        submodel: "Auxiliary Model is a model that used in analizing emotion images and etc. gpt3.5 is recommended.",
        oaiapikey: 'Api key for OpenAI. you can get it in https://platform.openai.com/account/api-keys',
        mainprompt: 'The main prompt option sets the default model behavior.',
        jailbreak: 'The NSFW/jailbreak prompt option activates when NSFW/jailbreak toggle is on in character.',
        globalNote: 'a note that strongly effects model behavior, also known as UJB. works in all characters.',
        formatOrder: "formating order of prompt. lower blocks does more effect to the model.",
        forceUrl: "if it is not blank, the request will go to the url that you had inputed.",
        tempature:"lower values make character follow prompts closely, but it will more likely to response like a machine.\nHigher values will result in creative behavior, but the character's response can break down more easily.",
        frequencyPenalty: "Higher values prevent the use of duplicate words in response, but character's response can break down more easily.",
        presensePenalty: "Higher values prevent the use of duplicate words in all context, but character's response can break down more easily.",
        sdProvider: "provider for image generation.",
        msgSound: "Plays *ding* sound when character responses",
        charDesc: "Brief description of the character. this effects characters response.",
        charFirstMessage: "First message of the character. this highly effects characters response.",
        charNote: "a note that strongly effects model behavior. embbedded to current character. also known as UJB.",
        toggleNsfw: "toggles NSFW/jailbreak prompt on and off.",
        lorebook: "Lorebook is a user-made dictionary for AI. AI only sees it when where is an activation keys in the context.",
        loreName: "name of the lore. it dosen't effects the Ai.",
        loreActivationKey: "If one of the activation key exists in context, the lore will be activated and prompt will go in. seperated by commas.",
        loreorder: "If insert Order is higher, it will effect the model more, and it will more lessly cuted when activated lore are many.",
        bias:"bias is a key-value data which modifies the likelihood of string appearing.\nit can be -100 to 100, higher values will be more likely to appear, and lower values will be more unlikely to appear \nWarning: if the tokenizer is wrong, it not work properly.",
        emotion: "Emotion Images option shows image depending at character's emotion which is analized by character's response. you must input emotion name as words *(like joy, happy, fear and etc.)* .emotion named **netural** will be default emotion if it exists. must be more then 3 images to work properly.",
        imggen: "Image Generation option generates and shows image from external program. the image is generated by image prompt, which is made by analizing current chat. \n\n image generation is analized based on key-value arguments, which are configarable in below."
                + "\n\Zn**'always'** key applys always, and dosen't changes. **'negative'** key applys always in negative value for image generation."
                + "\n\nobjects with other key's value will change according to the key's name as the chat progresses."
                + "\n\nIf a key has a special character in front of its name, it has a special effect."
                + "\n- if the key starts with **|**, the key's value will not change."
                + "\n- if the key starts with **$**, the key's value will more likely to change."
                + "\n\nwhen the image is first generated, you can only change it by modifying 'Current Image Generation Data' in below.",

        regexScript: "Regex Script is a custom script that is embbedded to the character. it replaces string that matches IN to OUT.\n\nThere are three type options."
                + "- **Modify Input** modifys user's input"
                + "- **Modify Output** modifys character's output"
                + "- **Modify Request Data** modifys current chat data when sent.\n\nIN must be a regex without flags and without slashes in start and end.\n\nOUT is a normal string."
                + "\n\n If OUT has {{data}} in string, it replaces to matched string."
                + "\n\n If OUT starts with **@@**, it doesn't replaces the string, but instead does a special effect if matching string founds."
                + "\n\n- @@emo (emotion name)\n\n        if character is Emotion Images mode, sets (emotion name) as emotion and prevents default.",
        experimental: "This is a experimental setting. it might be unstable.",
        oogaboogaURL: "If your WebUI supports older version of api, your url should look *like https:.../run/textgen*\n\n"
                + "If your WebUI supports newVersion of api, your url should look like *https://.../api/v1/generate* and use the api server as host, and add --api to arguments.",
        exampleMessage: "Example conversations that effects output of the character. it dosen't uses tokens permanently."
                + "\n\nExample format of conversations:"
                + "\n\n```\n<START>\n{{user}}: hi\n{{char}}: hello\n<START>\n{{user}}: hi\nHaruhi: hello\n```"
                + "\n\n```<START>``` Marks the beginning of a new conversation.",
        creatorQuotes: "Note that appearances on top of first message. Used to inform users about this character. It doesn't go into prompt.",
        systemPrompt: "A prompt that replaces main prompt in settings if its not blank.",
        chatNote: "a note that strongly effects model behavior. embbedded to current chat. also known as memory.",
        personality: "A brief description about character's personality. \n\n**It is not recommended to use this option. Describe it in character description instead.**",
        scenario: "A brief description about character's scenario. \n\n**It is not recommended to use this option. Describe it in character description instead.**",
        utilityBot: "When activated, it ignores main prompt. \n\n**It is not recommended to use this option. Modifiy system prompt instead.**",
        loreSelective: "If Selective mode is toggled, both Activation Key and Secondary key should have a match to activate the lore.",
        additionalAssets: "Additional assets to display in your chat. \n\n - use `{{raw::<asset name>}}` to use as path.\n - use `{{img::<asset name>}}` to use as image",
        superMemory: "SuperMemory makes your character memorize more by giving summarized data to AI.\n\n"
        + "SuperMemory model is a model that summarizes that text. davinci is recommended, and Auxiliary models are not recommended unless it is an unfiltered model with over 2000 tokens with great summarizing skill.\n\n"
        + "SuperMemory Prompt decides what prompt should be sent to summarize. if you leave it blank, it will use the default prompt. leaving blank is recommended.\n\n"
        + "After it is all setup, you can able it in the setting of a character."
    },
    setup: {
        chooseProvider: "Choose AI Provider",
        openaikey: "OpenAI with API Key (Recommended)",
        openaiProxy: "OpenAI Reverse proxy",
        setupmodelself: "Others / I will setup myself",
        inputApiKey: "Input API Key Here",
        apiKeyhelp: "You can get api key from: ",
        setupSelfHelp: "Setup yourself in settings, after Welcome screen ends.",
        theme: "Select your theme",
        texttheme: "Select your text color",
        inputName: "Lastly, Input your Nickname."
    },
    confirm: "Confirm",
    goback: "Go Back",
    botSettings:'Bot Settings',
    model: "Model",
    apiKey: 'API Key',
    providerURL: 'Request URL',
    providerJSON: 'Request Body JSON',
    mainPrompt: "Main Prompt",
    jailbreakPrompt: "NSFW/Jailbreak Prompt",
    globalNote: "Global Note",
    tokens: 'Tokens',
    maxContextSize: 'Max Context Size',
    maxResponseSize: 'Max Response Size',
    temperature: 'Temperature',
    frequencyPenalty: 'Frequency Penalty',
    presensePenalty: 'Presense Penalty',
    advancedSettings: 'Advanced Settings',
    advancedSettingsWarn: "Warn: If you don't know what the option does, don't change it!",
    formatingOrder: "Formating Order",
    authorNote: "Author's Note",
    firstMessage: 'First Message',
    description: 'Description',
    jailbreakToggle: 'Toggle NSFW/Jailbreak',
    charIcon: "Character Icon",
    characterDisplay: "Character Display",
    viewScreen: 'Additional Character Screen',
    none: "None",
    emotionImage: "Emotion Images",
    noImages: "No Images",
    noBias: "No Bias",
    image: 'Image',
    name: 'Name',
    emotion: "Emotion Name",
    value: "Value",
    reroll: 'Regenerate',
    chatList: 'Chat List',
    removeChat: "Remove this message?",
    loreBook: 'Lorebook',
    character: "Character",
    Chat: "Chat",
    globalLoreInfo: "Character Lorebook applys to all chats in the character.",
    group: "Group",
    groupLoreInfo: "Group Lorebook applys to all chats in the group.",
    localLoreInfo: "Chat Lorebook only applies to the current chat.",
    removeConfirm: "Do you really want to remove: ",
    removeConfirm2: "Do you REALLY want to remove: ",
    exportConfirm: "Do you want to export this?",
    insertOrder: 'Insertion Order',
    activationKeys: 'Activation keys',
    activationKeysInfo: 'Comma seperated',
    prompt: 'Prompt',
    loreBookDepth: "Lorebook Search Depth",
    loreBookToken: "Lorebook Max Tokens",
    removeCharacter: "Remove Character",
    removeGroup: "Remove Group",
    exportCharacter: "Export Character",
    userSetting: "User Settings",
    username:'Your Name',
    userIcon: "Your Icon",
    successExport: "Successfuly exported and downloaded to your download directory",
    successImport: "Successfuly imported",
    importedCharacter: 'Imported Character',
    alwaysActive: "Always Active",
    additionalPrompt: "Additional Prompt",
    descriptionPrefix: "Description Prefix",
    forceReplaceUrl: "Reverse Proxy",
    emotionWarn: "Auxiliary model is used.",
    plugin: "Plugin",
    language: "Language",
    UiLanguage: "UI Language",
    createfromScratch: "Create from Scratch",
    importCharacter: 'Import Character',
    translator: "Translator",
    disabled: "Disabled",
    noPluginSelected: "Model selected as plugin, but no plugin selected.",
    text: "Text",
    UISize: "Chat Text Size",
    newVersion: "Update found, do you want to install?",
    display: "Display & Audio",
    useCustomBackground: "Custom Background",
    translateInput: "Translate Input",
    autoTranslation: "Auto Translation",
    fullscreen: "Fullscreen",
    playMessage:"Play Message Audio",
    iconSize: "Icon Size",
    createGroup: "Create Group Chat",
    groupIcon: "Group Icon",
    single: "Single",
    multiple: "Multiple",
    useCharLorebook: "Use Lores in Characters",
    selectChar: "Select Character",
    askLoadFirstMsg: "Shall we load the first message?",
    theme: "Theme",
    editOrder: "Edit Order",
    autoMode: "Auto Mode",
    submodel: "Auxiliary Model",
    timeOutinSec: "Timeout (in seconds)",
    emotionPrompt: "Emotion Prompt",
    singleView: "Single View",
    SpacedView: "Multiple Character View",
    emphasizedView: "Double Character View",
    pluginWarn: "Plugins run in an isolated environment, but installing malicious plugins can cause problems.",
    createGroupImg: "Generate group icon",
    waifuWidth: "Waifu Chat Width",
    savebackup: "Save Backup to google",
    loadbackup: "Load Backup from google",
    files: "Files",
    backupConfirm: "Do you really want to save backup?",
    backupLoadConfirm: "Do you really want to load backup? All datas will be lost!",
    backupLoadConfirm2: "Do you really, really want to load backup? All datas will be lost!",
    pasteAuthCode: "Please copy the auth code from popup and paste it in here:",
    others: "Others",
    presets: "Presets",
    imageGeneration: "Image Generation",
    provider: "Provider",
    key: "key",
    noData: "No Data",
    currentImageGeneration: "Current Image Generation Data",
    promptPreprocess: "Use Prompt Preprocess",
    SwipeRegenerate: "Use Swipe for Regeneration",
    instantRemove: "Remove subsequent when message remove",
    instantRemoveConfirm: "Do you want to remove just one message? If you select No, then the message after it will also be remove.",
    textColor: "Text Color",
    classicRisu: "Classic Risu",
    highcontrast: "High-Contrast",
    quickPreset: "You can quickly change preset by Ctrl + (Index of Preset)",
    requestretrys:"Request Retrys when Fail",
    utilityBot: "Utility Bot",
    ShowLog: "Show Request Logs",
    waifuWidth2: "Waifu Character Size",
    sayNothing:"Input 'say nothing' when no string inputed",
    regexScript: "Regex Script",
    type: "Type",
    editInput: "Modfiy Input",
    editOutput: "Modfiy Output",
    editProcess: "Modfiy Request Data",
    loadLatest: "Load Latest Backup",
    loadOthers: "Load Other Backups",
    exampleMessage: "Example Message",
    creatorNotes: "Creator's Comment",
    systemPrompt: "System Prompt",
    characterNotes: "Character Notes",
    personality: "Personality",
    scenario: "Scenario",
    alternateGreetings: "Alternate Greetings",
    unrecommended: "Not Recommended",
    chatNotes: "Chat Notes",
    showUnrecommended: "Show Unrecommended Settings",
    altGreet: "Alternative First Messages",
    scripts: "Scripts",
    settings: "Settings",
    selective: "Selective",
    SecondaryKeys: 'Secondary keys',
    useGlobalSettings: "Use Global Settings",
    recursiveScanning: "Recursive Scanning",
    creator: "Creator",
    CharVersion: "Character Version",
    Speech: "Speech",
    ToggleSuperMemory: "Toggle SupaMemory",
    SuperMemory:"SupaMemory",
    useExperimental: "Able Experimental Features",
    showMemoryLimit: "Show Memory Limit",
    roundIcons: "Round Icons",
    streaming: "Streaming",
    chatBot:'Chat Bot',
    otherBots:'Other Bots',
    user:"User",
    additionalAssets:"Additional Assets",
    editDisplay: "Modify Display",
    community: "Community",
    textBackgrounds: "Custom Text Screen Color",
    textBorder: "Text Outlines",
    textScreenRound: "Round Text Screen",
    textScreenBorder: "Text Screen Borders",
    ttsReadOnlyQuoted: "Read Only Quoted",
    ttsStop: "Stop TTS",
    askRemoval:"Ask Removal"
}
