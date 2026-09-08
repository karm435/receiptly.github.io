---
layout: legal
title: Privacy Policy
permalink: /privacypolicy/
include_in_header: true
eyebrow: Your data, explained
description: How Receiptly handles your receipts, optional Gmail access, and the services you choose to use.
updated: 2026-09-08
sections:
  - { title: iOS and iPadOS, id: ios }
  - { title: Android, id: android }
  - { title: Information we collect, id: information }
  - { title: Purchases, id: purchases }
  - { title: Data security, id: security }
  - { title: Receipt scanning, id: scanning }
  - { title: Gmail integration, id: gmail }
  - { title: Third-party services, id: services }
  - { title: Disconnecting and deletion, id: deletion }
  - { title: Contact, id: contact }
---

Receiptly is a receipt scanner and expense tracker provided by Karma Academy Pty Ltd ("we", "us", or "our"). This policy explains how the Receiptly apps for iPhone, iPad, and Android access, use, store, and share your information, including Google user data when you choose Gmail import.

Receiptly does not create an account for you and does not sell your receipt content. Receipt photos, OCR text, merchants, amounts, categories, tags, and expenses stay on your device first.

What happens next depends on the platform and the features you turn on:

- **iPhone and iPad:** if iCloud is enabled for Receiptly, Apple can copy that data between your Apple devices through your Apple Account.
- **Android:** receipts stay on that device. There is no iCloud sync, and the Android library does not sync with iPhone.
- **Either platform:** if you turn on Smart Scan, a reduced copy of a receipt image can be sent to Google AI servers for advanced scanning.
- **Optional Gmail import on iPhone and iPad:** email content is read temporarily on your device. Receipt details you choose to save and a marker that recognizes previously imported emails become part of your receipt library and can sync with iCloud. [Read how Gmail import works](#gmail).

The rest of this page covers those paths and the other optional services. Receipt content is not used to build an advertising profile of you.

## iOS and iPadOS {#ios}

The iPhone and iPad app stores your receipt library on your device. With iCloud enabled for Receiptly, receipt photos, saved purchase details, expenses, and Gmail import markers can sync through Apple's CloudKit service to your other Apple devices.

Receipt text recognition uses Apple's Vision framework. On-device Apple Intelligence can help extract receipt details on supported devices. Optional Smart Scan can send a reduced receipt image to Google's cloud AI services, as explained in [Receipt scanning](#scanning).

**Gmail import is an optional iPhone and iPad integration in supported app versions.** It requests read-only access to find purchase emails and lets you review extracted details before saving. Gmail email text and attachments are processed locally and are excluded from cloud Smart Scan. Read [Gmail integration](#gmail) for access, storage, sharing, and retention details.

App Store purchases are managed with RevenueCat. Free users may see Kickstart Exchange app recommendations. The [services section](#services) explains these providers.

## Android {#android}

The Android app stores receipt images and its receipt database in the app's storage on your device. The receipt library is excluded from Android Auto Backup and device-transfer backups. There is no Receiptly account, iCloud sync, or library sync with the iPhone and iPad app.

Receipt text recognition uses Google ML Kit on your device. If you enable optional Smart Scan, a reduced receipt image can be sent to Google's cloud AI services to extract purchase details. Read [Receipt scanning](#scanning) for the information sent and its purpose.

**The Android app does not include Gmail import and does not request access to your Gmail mailbox.** Google Play handles purchases, and RevenueCat checks subscription access. The Android app does not show ads or use the advertising identifier. The shared sections below describe diagnostics, optional services, and deletion.

## Information we collect {#information}

Receiptly uses receipt photos, recognized text, merchants, purchase dates, amounts, currencies, line items, categories, tags, warranty details, and expenses to create your library, show reports and reminders, and produce exports you request. Scanning and storage start on your device. Optional sync, Smart Scan, and Gmail import follow the platform-specific paths above. Subscription checks and usage/crash diagnostics also send information to the service providers named below.

### Information you provide to us

Photos you take and details you type are stored locally.

On iOS, if iCloud is enabled for the app, that data syncs through your personal Apple Account. Delete the app to remove the local copy. Manage iCloud copies in iOS Settings.

On Android, uninstalling the app or deleting a receipt removes the local copy. Android Auto Backup is not used for the receipt library.

Support email you send is used only to reply.

## Purchases {#purchases}

- **iOS:** purchases go through the App Store.
- **Android:** purchases go through Google Play.

Receiptly uses RevenueCat to check subscription status so paid features become available. RevenueCat does not receive your receipt images or OCR text.

Paid features are sold as Receiptly Pro on iOS and Receiptly Plus on Android.

## How we keep data secure {#security}

Data on the device is protected by the device's own encryption.

On iOS, iCloud data is managed through your Apple Account when you enable sync.

On Android, receipt images and the local database stay on the device. There is no iCloud or cross-device Receiptly account.

## Receipt scanning {#scanning}

Optical character recognition starts on your device.

Smart Scan is optional and stays off until you turn it on. It is a Receiptly Pro feature on iOS and a Receiptly Plus feature on Android. Scanning starts on your device. If a receipt needs extra help, a reduced copy of the image (JPEG, maximum 2048-pixel long edge) can be sent to Google AI servers for advanced scanning. That path uses Firebase AI Logic and Vertex AI when the device is online and Remote Config allows it. The original image stays local. Turn Smart Scan off to keep scanning on-device.

Firebase Analytics records basic product usage events. Firebase Crashlytics records crash diagnostics. App Check protects those requests. Remote Config can turn the Smart Scan path on or off. Analytics and Crashlytics must not receive receipt images, OCR text, merchant names, amounts, filenames, receipt identifiers, search queries, expense titles, addresses, phone numbers, emails, or generated model output.

Receiptly does not use an advertising identifier on Android and does not show ads.

## Gmail integration {#gmail}

Gmail import is an optional feature in supported versions of Receiptly for iPhone and iPad. You choose whether to connect a Google account and which purchases to save. Connecting Gmail does not create a Receiptly account.

### What Receiptly accesses

Google provides account identifiers and basic profile information, including your email address, so Receiptly can connect your account and show which account is connected. Receiptly requests read-only Gmail access to find purchase-related emails. The requested Gmail permission is `https://www.googleapis.com/auth/gmail.readonly`. This permission can read your mailbox; Google does not offer a permission restricted to purchase emails. Receiptly searches for likely purchases and does not send, change, or delete your emails.

When you open Gmail in Integrations, Receiptly requests purchase emails from the last seven days. Scrolling or choosing to load older emails requests more. The app reads message identifiers, senders, subjects, dates, and short previews to build the list. It reads the email body when you open a message, and a PDF or image attachment when you select it as the source for a receipt. Reading an email may also retrieve attachments included inline in its message data.

### Temporary processing on your device

The app connects directly to Google's Gmail API over an encrypted connection. Receiptly does not use its own backend to fetch or process Gmail data.

Email content and selected attachments are processed on your device using local text parsing, Apple's Vision framework, and on-device Apple Intelligence where available. **Gmail content is not sent to cloud AI services, even when Smart Scan is enabled for other receipts.**

Message identifiers, previews, email bodies, and original attachments are held temporarily in memory for the browsing and import flow. Receiptly does not save a Gmail inbox, email cache, or original attachments to disk. Leaving the Gmail flow or completing disconnection clears that temporary browsing state.

Google authorization credentials are retained in the device's Keychain so you can return without signing in each time. These credentials are not stored in Receiptly's receipt database or synced through CloudKit.

### What happens when you save a receipt

After you review and save an import, extracted fields such as merchant, purchase date, amount, currency, taxes, receipt number, and line items become an ordinary receipt in your library. Receiptly does not automatically save the original email, its Gmail message identifier, or its original PDF or image attachment with that receipt.

Receiptly also saves a one-way fingerprint derived from your Google account identifier and the Gmail message identifier with each imported receipt. This marker lets the app recognize a previously saved email when you browse Gmail again, without storing the original identifiers with the receipt.

**Saved receipt fields and this import marker can sync through your personal iCloud account when iCloud is enabled for Receiptly.** These saved records remain after you disconnect Gmail. You can edit, export, or delete them like other receipts. If you export or share a saved receipt, the selected receipt fields are included in the file and shared with the destination you choose. That includes fields originally extracted from Gmail.

### How Google data is used

Gmail data is used to display purchases you can review and convert into receipts. We do not sell it, use it for advertising, send it to analytics or crash-reporting services, or use it to train general-purpose AI models. Receiptly does not provide us with a backend inbox where we can read your Gmail messages. If you contact support, you choose what information to include.

Receiptly's use and transfer of information received from Google APIs follows the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including its Limited Use requirements.

## Third-party services {#services}

### Kickstart Exchange (iOS only)

On iPhone and iPad, free users may see Kickstart Exchange banners that recommend other independent apps. Receiptly Pro subscribers do not see these banners. Kickstart Exchange is not used on Android.

Kickstart Exchange matches apps, not people. It does not track users or devices, and it does not build advertising profiles. The SDK may send app-level details such as the bundle identifier, platform, app and build versions, SDK version, and App Store country so it can show apps that can actually be installed. In shipping builds it may also send an Apple-signed App Transaction to confirm a real install. Kickstart Exchange processes that signed data only long enough to verify the app, then discards it. Impression and click counts are recorded per app, not per person. Ad artwork is delivered by Kickstart Exchange through Cloudflare.

Kickstart Exchange does not receive your receipts. Receiptly does not use Kickstart Exchange to identify you.

Read the [Kickstart Exchange privacy notice](https://exchange.kickstart.tools/privacy).

### Other services

- Google Sign-In and Gmail API when you connect Gmail on iPhone or iPad
- Apple iCloud / CloudKit for optional sync on iOS, including receipt fields and import markers you save from Gmail
- The App Store or Google Play for purchases, depending on the platform
- RevenueCat for subscription status
- Firebase (Analytics, Crashlytics, App Check, Remote Config, and the optional Smart Scan path above)

## Disconnecting and deletion {#deletion}

To disconnect Gmail, open **More → Integrations → Gmail → Disconnect**. When disconnection completes, Receiptly revokes its Google authorization and removes the saved credentials and temporary Gmail browsing data. You can also remove Receiptly's access in your [Google Account connections](https://myaccount.google.com/connections).

Disconnecting does not delete emails in Gmail or receipts you previously saved in Receiptly. The import marker remains with its receipt, including archived receipts, until you delete that receipt. Delete those receipts in Receiptly if you no longer want them; if iCloud sync is enabled, receipt deletions follow the app's normal sync behavior.

Receiptly keeps saved receipts and expenses until you delete them. Archiving a receipt keeps the record and its Gmail import marker. Delete individual records in the app to remove them from the library; uninstalling the app removes the local library. On iOS, uninstalling does not by itself delete copies in iCloud: manage those through your Apple Account in Settings. Copies you previously exported or shared remain in the destination you chose and must be deleted there separately. There is no separate Receiptly cloud account to close.

## Contact {#contact}

For questions about this policy or your data, contact Karma Academy Pty Ltd at [support@karmaacademy.com.au](mailto:support@karmaacademy.com.au). You can also use Contact Support in the app. Do not include receipt images or email contents unless they are needed for your support request and you choose to share them.
