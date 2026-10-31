# Rx-AId — Your Prescription. Understood.
### "Medicines Made Simple. Healthcare Made Smarter."
**Developed by Team Hi-fi • Visakhapatnam, Andhra Pradesh, India**

Rx-AId is an instant AI-powered health assistant that helps patients, caregivers, and families understand handwritten medical prescriptions by converting them into readable medication information, clear instructions, important safety alerts, local pharmacy price comparisons, and convenient medicine ordering and reminder options.

---

## 🌟 Key Features

1. **AI Prescription Scanner**:
   - Dual-input camera photograph or image upload (JPG, JPEG, PNG, WebP up to 10MB).
   - Image preview, rotation (90° increments), and re-taking.
   - Built-in 1-click sample handwritten prescriptions (General Medicine, Cardiology, Pediatric/Cough) for instant evaluation.
   - Animated medical scanning progress indicator ("Reading your prescription...", "Identifying medicine names...", "Preparing medication info...").
   - Gemini Multimodal Vision API OCR integration with strict medical safety guardrails.
   - Structured JSON analysis with confidence ratings (*Confirmed reading*, *Please verify*, *Unclear handwriting*).

2. **Patient Dashboard**:
   - Personalized patient greeting, Visakhapatnam location context, and sample data indicator.
   - Dynamic dynamic statistics: Prescriptions Scanned, Medicines Tracked, Reminders Completed.
   - Interactive Today's Medicine Schedule with instant **Taken 🟢** and **Skipped 🟡** dose status logging.
   - Quick-access cards and recent order history.

3. **My Medicines**:
   - Central repository of patient medications extracted from doctor prescriptions.
   - Categorized by therapeutic class (Pain & Fever, Antibiotics, Gastrointestinal, Cardiovascular).
   - Instant actions: Set Medicine Reminder, Find in Pharmacy, or Remove.

4. **Visakhapatnam Pharmacy Store & Price Comparison**:
   - Multi-pharmacy comparison for identical medicines across trusted Visakhapatnam stores:
     - **Apollo Pharmacy** (R.K. Beach Road, Siripuram)
     - **MedPlus Pharmacy** (Siripuram Junction)
     - **Netmeds Pharmacy Store** (Jagadamba Centre)
     - **Care+ Medical & Surgical** (Dwaraka Nagar)
     - **Sri Sai Medicals** (MVP Colony Sector 6)
   - Real-time comparison highlighting the **Lowest Demo Price**, savings calculations, delivery charges, and stock availability.
   - Prescription-required badges (℞) and comprehensive drug detail modal.

5. **Shopping Cart & Home Delivery Simulation**:
   - Functional cart with quantity adjustment and pharmacy selection.
   - Delivery fee calculations (Free delivery for orders above ₹500).
   - Visakhapatnam locality selector (Siripuram, Beach Road, MVP Colony, Dwaraka Nagar, etc.).
   - Simulated checkout generating unique order reference IDs (e.g., `RX-VIZAG-2026-XXXX`).
   - Clear distinction between demo orders and legal retail dispensing.

6. **Medicine Reminder System**:
   - Add, edit, or delete custom medication schedules with dosage, frequency, and meal instructions.
   - Interactive daily dose logging (*Taken*, *Skipped*, *Upcoming*).
   - Native Web Browser Notification API integration with audio/visual alerts.

7. **Bilingual English & Telugu (తెలుగు) Support**:
   - Instant language switch toggle in the header, persistent across sessions.
   - Complete translations for navigation, headers, forms, buttons, reminders, and medical safety alerts.

8. **Privacy-Preserving Local Demo Persistence**:
   - Zero mandatory registration: instant "Continue as Guest / Explore Demo" mode for evaluators.
   - All states persisted via typed `localStorage`.
   - "Clear My Data" reset confirmation modal.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (Healthcare green palette: `#087A50`, fresh mint `#42B883`, soft background `#F5FAF7`)
- **Icons**: Lucide React
- **AI Engine**: Google Gemini API (`@google/genai` with `gemini-3.8-flash` multimodal model and intelligent clinical fallback for offline/demo evaluation)
- **Deployment**: Vercel-ready with zero server dependencies

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18+ (tested on Node v20 & v24)
- npm or pnpm or yarn

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/team-hifi/rx-aid.git
cd rx-aid

# Install dependencies
npm install
```

### 3. Environment Configuration
Create a `.env.local` file in the root directory:
```bash
cp .env.example .env.local
```
Add your Google Gemini API key:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```
*(Note: If no API key is provided, the application automatically runs in high-fidelity Demo Mode with clinical fallback data, allowing seamless evaluation).*

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your web browser.

### 5. Build for Production
```bash
npm run build
npm start
```

---

## 📋 5-Step Testing Checklist for Judges & Evaluators

| Step | Action | Expected Result |
|---|---|---|
| **Step 1: Demo Login & Exploration** | Open the homepage. Click *"Continue as Guest / Explore Demo"* on the Login page. | Instantly lands on the personalized Patient Dashboard with initial sample data for Visakhapatnam. |
| **Step 2: AI Prescription Scan** | Navigate to `/scan`. Click any of the 3 sample handwritten prescriptions (e.g., Sample 1: Dr. Varma). Click *"⚡ Analyze Prescription with AI"*. | Scanning animation displays ("Reading...", "Identifying..."). Decoded medicine cards appear with confidence badges (*Confirmed reading*, *Please verify*), and Safety Alerts are highlighted. |
| **Step 3: Save Medicine & Set Reminder** | On any decoded medicine card, click *"Save to My Medicines"* and *"Set Medicine Reminder"*. Adjust times and click *"Save Schedule"*. | Medicine appears in `/medicines`. Reminder schedule is created in `/reminders`. Today's schedule on the Dashboard updates dynamically. |
| **Step 4: Price Comparison & Demo Checkout** | Go to `/pharmacy`. Search for "Dolo" or "Augmentin". Click *"Compare Prices"* to view Vizag store prices (Apollo vs MedPlus vs Netmeds). Click *"Add to Cart"*, proceed to `/cart`, and click *"Place Demo Order"*. | Shows lowest price badge. Cart calculates subtotal and delivery. Unique Order ID (`RX-VIZAG-2026-XXXX`) is generated with celebration banner. |
| **Step 5: Bilingual Telugu Switch & Reset** | Click the **తెలుగు** toggle in the top header. Verify all UI headings, buttons, and reminder terms translate seamlessly. Then click *"Clear My Data"* to test clean data reset. | Interface switches to authentic Telugu typography and translations. Reset dialog safely re-seeds initial clean state without crashing. |

---

## 🔮 5 Future Development Suggestions

1. **Direct WhatsApp Prescription Assistant**:
   Enable patients and elders to simply send a photo of their handwritten prescription via WhatsApp, instantly receiving bilingual voice audio notes and formatted medication instructions in Telugu and English.

2. **Real-Time Pharmacy Inventory & API Integration**:
   Connect directly with local Visakhapatnam pharmacy POS systems (Apollo, MedPlus, Care+) via secure real-time ERP APIs for live stock availability, accurate pricing, and instant courier dispatch.

3. **Drug-Drug Interaction & Allergy Safety Guardrails**:
   Integrate clinical pharmacology databases (CDSCO, FDA, OpenFDA) to cross-check patient profiles for adverse drug interactions, pregnancy warnings, and chronic illness contraindications.

4. **Telugu Regional Voice Readout & Dialect Audio**:
   Provide natural Gemini 3.8 Flash TTS text-to-speech voice playback in conversational Telugu dialects for rural and illiterate patients who cannot easily read screen text.

5. **Smart-Pillbox IoT Sync & Caregiver Alarms**:
   Sync Rx-AId reminder schedules with Bluetooth smart pill organizers and notify family caregivers via SMS if an elderly patient misses their cardiac or diabetic dose.

---

## ⚖️ Medical & Ethical AI Disclaimer

Rx-AId is an AI-assisted healthcare information tool developed for educational, demonstration, and research purposes. It does not provide medical diagnoses, prescribe treatments, or alter a doctor's prescribed regimen. All users must confirm medication details with a registered medical practitioner or licensed pharmacist before consumption. All prices, pharmacies, and orders in this demonstration prototype are simulated for the Visakhapatnam pilot showcase.
