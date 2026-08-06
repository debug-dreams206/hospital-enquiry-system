
const DEPARTMENTS = [
  {id:'general', en:'General Medicine', te:'జనరల్ మెడిసిన్', hi:'जनरल मेडिसिन'},
  {id:'cardiology', en:'Cardiology', te:'కార్డియాలజీ', hi:'कार्डियोलॉजी'},
  {id:'ortho', en:'Orthopedics', te:'ఆర్థోపెడిక్స్', hi:'ऑर्थोपेडिक्स'},
  {id:'gyno', en:'Gynecology', te:'గైనకాలజీ', hi:'स्त्री रोग'},
  {id:'peds', en:'Pediatrics', te:'పీడియాట్రిక్స్', hi:'बाल रोग'},
  {id:'ent', en:'ENT', te:'ఈఎన్\u200cటీ', hi:'ईएनटी'},
  {id:'radiology', en:'Scans / Radiology', te:'స్కాన్లు / రేడియాలజీ', hi:'स्कैन / रेडियोलॉजी'},
  {id:'pharmacy', en:'Pharmacy', te:'ఫార్మసీ', hi:'फार्मेसी'},
  {id:'billing', en:'Billing Counter', te:'బిల్లింగ్ కౌంటర్', hi:'बिलिंग काउंटर'},
  {id:'other', en:'Other', te:'ఇతరాలు', hi:'अन्य'}
];

const T = {
  en:{ appName:'Sanjeevani Hospital', appSub:'Enquiry Desk', heroTitle:'How can we help?', heroSub:'Choose an option to continue',
    imPatient:'I am a Patient', patientSub:'Raise or track an enquiry', imStaff:'Front Desk Staff', staffSub:'Manage patient enquiries',
    back:'Back', newEnquiry:'Raise New Enquiry', newEnquirySub:'Tell us what you need help with', trackEnquiry:'Track My Enquiry', trackEnquirySub:'Check the status using your phone number',
    whatHelp:'What do you need help with?', catAppointment:'Appointment', catDepartment:'Department Query', catBilling:'Billing', catOther:'Other',
    yourName:'Your Name', namePh:'e.g. Ramesh Kumar', phoneLabel:'Phone Number', phonePh:'10-digit mobile number',
    whichDept:'Which department?', selectDept:'Select department', urgent:'Urgent', notUrgent:'Normal',
    describe:'Describe your issue (optional)', describePh:'Type a few words about your enquiry...',
    submit:'Submit Enquiry', yourToken:'Your Token Number', tokenHelp:'Show this number at the Front Desk, or track it anytime using your phone number.',
    listen:'Listen', doneBtn:'Done', enterPhone:'Enter your phone number', search:'Search', noResults:'No enquiries found for this phone number',
    statusNew:'Received', statusProgress:'Being Handled', statusResolved:'Resolved',
    queue:'Enquiry Queue', dashboard:'Dashboard', all:'All', urgentOnly:'Urgent',
    markProgress:'Mark In Progress', markResolved:'Mark Resolved', resolutionNote:'Resolution note (optional)', resNotePh:'What was done to resolve this?',
    assignTo:'Assign to staff (optional)', assignPh:'e.g. Nurse Lakshmi', created:'Logged', patient:'Patient', phone:'Phone', dept:'Department',
    ticketId:'Token', close:'Close', totalToday:'Total Today', pendingCount:'Pending', urgentCount:'Urgent Open', resolvedCount:'Resolved Today',
    emptyQueue:'No enquiries in this filter yet', saveUpdate:'Save Update', staffNewSub:'Log an enquiry on behalf of a patient',
    langName:'English'
  },
  te:{ appName:'సంజీవని ఆసుపత్రి', appSub:'విచారణ కేంద్రం', heroTitle:'మేము ఎలా సహాయపడగలం?', heroSub:'కొనసాగించడానికి ఒక ఎంపికను ఎంచుకోండి',
    imPatient:'నేను రోగిని', patientSub:'విచారణ నమోదు చేయండి లేదా స్థితి చూడండి', imStaff:'ఫ్రంట్ డెస్క్ సిబ్బంది', staffSub:'రోగుల విచారణలను నిర్వహించండి',
    back:'వెనుకకు', newEnquiry:'కొత్త విచారణ నమోదు', newEnquirySub:'మీకు ఏమి సహాయం కావాలో తెలియజేయండి', trackEnquiry:'నా విచారణ స్థితి చూడండి', trackEnquirySub:'మీ ఫోన్ నంబర్ ఉపయోగించి స్థితిని తనిఖీ చేయండి',
    whatHelp:'మీకు ఏమి సహాయం కావాలి?', catAppointment:'అపాయింట్‌మెంట్', catDepartment:'విభాగం ప్రశ్న', catBilling:'బిల్లింగ్', catOther:'ఇతరాలు',
    yourName:'మీ పేరు', namePh:'ఉదా. రమేష్ కుమార్', phoneLabel:'ఫోన్ నంబర్', phonePh:'10 అంకెల మొబైల్ నంబర్',
    whichDept:'ఏ విభాగం?', selectDept:'విభాగాన్ని ఎంచుకోండి', urgent:'అత్యవసరం', notUrgent:'సాధారణం',
    describe:'మీ సమస్యను వివరించండి (ఐచ్ఛికం)', describePh:'మీ విచారణ గురించి కొన్ని మాటలు రాయండి...',
    submit:'విచారణ సమర్పించండి', yourToken:'మీ టోకెన్ నంబర్', tokenHelp:'ఈ నంబర్‌ను ఫ్రంట్ డెస్క్‌లో చూపించండి, లేదా మీ ఫోన్ నంబర్‌తో ఎప్పుడైనా స్థితిని చూడండి.',
    listen:'వినండి', doneBtn:'పూర్తయింది', enterPhone:'మీ ఫోన్ నంబర్ నమోదు చేయండి', search:'వెతకండి', noResults:'ఈ ఫోన్ నంబర్‌కు విచారణలు కనుగొనబడలేదు',
    statusNew:'అందుకున్నాము', statusProgress:'పరిష్కరిస్తున్నాము', statusResolved:'పరిష్కరించబడింది',
    queue:'విచారణ క్యూ', dashboard:'డాష్‌బోర్డ్', all:'అన్నీ', urgentOnly:'అత్యవసరం',
    markProgress:'పరిష్కరిస్తున్నట్లు గుర్తించండి', markResolved:'పరిష్కరించినట్లు గుర్తించండి', resolutionNote:'పరిష్కార గమనిక (ఐచ్ఛికం)', resNotePh:'దీన్ని పరిష్కరించడానికి ఏమి చేశారు?',
    assignTo:'సిబ్బందికి కేటాయించండి (ఐచ్ఛికం)', assignPh:'ఉదా. నర్స్ లక్ష్మి', created:'నమోదు చేయబడింది', patient:'రోగి', phone:'ఫోన్', dept:'విభాగం',
    ticketId:'టోకెన్', close:'మూసివేయండి', totalToday:'నేటి మొత్తం', pendingCount:'పెండింగ్', urgentCount:'అత్యవసరం తెరిచి ఉంది', resolvedCount:'నేడు పరిష్కరించబడింది',
    emptyQueue:'ఈ ఫిల్టర్‌లో ఇంకా విచారణలు లేవు', saveUpdate:'నవీకరణను సేవ్ చేయండి', staffNewSub:'రోగి తరపున విచారణను నమోదు చేయండి',
    langName:'తెలుగు'
  },
  hi:{ appName:'संजीवनी अस्पताल', appSub:'जांच केंद्र', heroTitle:'हम आपकी कैसे मदद कर सकते हैं?', heroSub:'जारी रखने के लिए एक विकल्प चुनें',
    imPatient:'मैं मरीज़ हूं', patientSub:'शिकायत दर्ज करें या स्थिति देखें', imStaff:'फ्रंट डेस्क स्टाफ', staffSub:'मरीज़ों की शिकायतें प्रबंधित करें',
    back:'वापस', newEnquiry:'नई शिकायत दर्ज करें', newEnquirySub:'बताएं आपको किस चीज़ में मदद चाहिए', trackEnquiry:'मेरी शिकायत की स्थिति देखें', trackEnquirySub:'अपने फोन नंबर से स्थिति जांचें',
    whatHelp:'आपको किस चीज़ में मदद चाहिए?', catAppointment:'अपॉइंटमेंट', catDepartment:'विभाग से प्रश्न', catBilling:'बिलिंग', catOther:'अन्य',
    yourName:'आपका नाम', namePh:'जैसे रमेश कुमार', phoneLabel:'फोन नंबर', phonePh:'10 अंकों का मोबाइल नंबर',
    whichDept:'कौन सा विभाग?', selectDept:'विभाग चुनें', urgent:'जरूरी', notUrgent:'सामान्य',
    describe:'अपनी समस्या बताएं (वैकल्पिक)', describePh:'अपनी शिकायत के बारे में कुछ शब्द लिखें...',
    submit:'शिकायत जमा करें', yourToken:'आपका टोकन नंबर', tokenHelp:'यह नंबर फ्रंट डेस्क पर दिखाएं, या अपने फोन नंबर से कभी भी स्थिति देखें।',
    listen:'सुनें', doneBtn:'हो गया', enterPhone:'अपना फोन नंबर डालें', search:'खोजें', noResults:'इस फोन नंबर के लिए कोई शिकायत नहीं मिली',
    statusNew:'प्राप्त हुआ', statusProgress:'निपटाया जा रहा है', statusResolved:'हल हो गया',
    queue:'शिकायत कतार', dashboard:'डैशबोर्ड', all:'सभी', urgentOnly:'जरूरी',
    markProgress:'निपटाया जा रहा है के रूप में चिह्नित करें', markResolved:'हल किया गया चिह्नित करें', resolutionNote:'समाधान टिप्पणी (वैकल्पिक)', resNotePh:'इसे हल करने के लिए क्या किया गया?',
    assignTo:'स्टाफ को सौंपें (वैकल्पिक)', assignPh:'जैसे नर्स लक्ष्मी', created:'दर्ज किया गया', patient:'मरीज़', phone:'फोन', dept:'विभाग',
    ticketId:'टोकन', close:'बंद करें', totalToday:'आज कुल', pendingCount:'लंबित', urgentCount:'जरूरी खुले', resolvedCount:'आज हल हुए',
    emptyQueue:'इस फ़िल्टर में अभी कोई शिकायत नहीं', saveUpdate:'अपडेट सहेजें', staffNewSub:'मरीज़ की ओर से शिकायत दर्ज करें',
    langName:'हिंदी'
  }
};

const SPEECH_LANG = {en:'en-IN', te:'te-IN', hi:'hi-IN'};

const ICONS = {
  patient:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/></svg>',
  staff:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"/><path d="M3 12h18"/></svg>',
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
  calendar:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4.5" width="18" height="16" rx="2"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/></svg>',
  department:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7.5v9M7.5 12h9"/></svg>',
  billing:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6"/></svg>',
  other:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 015 .5c0 1.7-2.5 1.7-2.5 3.5"/><circle cx="12" cy="17" r="0.4" fill="currentColor"/></svg>',
  back:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>',
  speaker:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M17 9a4 4 0 010 6"/></svg>',
  statusNew:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none"/></svg>',
  statusProgress:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
  statusResolved:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.5 2.5L16 9.5"/></svg>',
  empty:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 15h6"/></svg>'
};

const CAT_ICON = {appointment:'calendar', department:'department', billing:'billing', other:'other'};

let state = {
  lang: 'en',
  view: 'home',
  draft: null,
  trackPhone: '',
  trackResults: null,
  staffTab: 'queue',
  filter: 'all',
  openTicket: null,
  tickets: [],
  loaded: false
};

async function loadTickets(){
  try{
    const res = await window.storage.get('hem-tickets', true);
    state.tickets = res && res.value ? JSON.parse(res.value) : [];
  }catch(e){ state.tickets = []; }
  state.loaded = true;
  render();
}

async function saveTickets(){
  try{ await window.storage.set('hem-tickets', JSON.stringify(state.tickets), true); }catch(e){}
}

async function nextTicketNumber(){
  let n = 1;
  try{
    const res = await window.storage.get('hem-counter', true);
    n = res && res.value ? parseInt(res.value,10)+1 : 1;
  }catch(e){ n = 1; }
  try{ await window.storage.set('hem-counter', String(n), true); }catch(e){}
  return 'T-' + String(n).padStart(3,'0');
}

function t(key){ return T[state.lang][key] || key; }
function deptLabel(id){
  const d = DEPARTMENTS.find(x=>x.id===id);
  if(!d) return id;
  return d[state.lang] || d.en;
}
function speak(text){
  if(!('speechSynthesis' in window)) return;
  try{
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = SPEECH_LANG[state.lang];
    window.speechSynthesis.speak(u);
  }catch(e){}
}
function fmtTime(ts){
  const d = new Date(ts);
  return d.toLocaleDateString('en-IN',{day:'2-digit',month:'short'}) + ', ' + d.toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'});
}
function statusPill(status){
  const map = {new:['statusNew','status-new','statusNew'], progress:['statusProgress','status-progress','statusProgress'], resolved:['statusResolved','status-resolved','statusResolved']};
  const [key, cls, icon] = map[status];
  return '<span class="status-pill '+cls+'">'+ICONS[icon]+t(key)+'</span>';
}

function go(view, extra){
  state.view = view;
  if(extra) Object.assign(state, extra);
  render();
}

function newDraft(){
  return {name:'', phone:'', category:null, department:'', urgent:false, notes:''};
}

async function submitDraft(){
  const d = state.draft;
  if(!d.name.trim() || !/^\d{10}$/.test(d.phone.trim()) || !d.category) return;
  const token = await nextTicketNumber();
  const ticket = {
    id: token,
    name: d.name.trim(),
    phone: d.phone.trim(),
    category: d.category,
    department: d.department || '',
    urgent: d.urgent,
    notes: d.notes.trim(),
    status: 'new',
    assignedTo: '',
    resolutionNote: '',
    createdAt: Date.now(),
    updatedAt: Date.now(),
    loggedBy: state.view === 'staff-new' ? 'staff' : 'patient'
  };
  state.tickets.unshift(ticket);
  await saveTickets();
  go('token-confirm', {lastTicket: ticket, draft: null});
}

async function updateStatus(id, status){
  const tk = state.tickets.find(x=>x.id===id);
  if(!tk) return;
  tk.status = status;
  tk.updatedAt = Date.now();
  await saveTickets();
  render();
}

async function saveTicketDetails(id, assignedTo, resolutionNote){
  const tk = state.tickets.find(x=>x.id===id);
  if(!tk) return;
  tk.assignedTo = assignedTo;
  tk.resolutionNote = resolutionNote;
  tk.updatedAt = Date.now();
  await saveTickets();
  render();
}

function LangSwitch(){
  const langs = ['en','te','hi'];
  return '<div class="langsw">' + langs.map(l=>
    '<button class="'+(state.lang===l?'active':'')+'" onclick="setLang(\''+l+'\')">'+T[l].langName+'</button>'
  ).join('') + '</div>';
}
function setLang(l){ state.lang = l; render(); }

function TopBar(){
  return '<div class="topbar"><div class="brand">'
    +'<div class="brand-mark">'+iconWhite(ICONS.calendar)+'</div>'
    +'<div><div class="brand-name">'+t('appName')+'</div><div class="brand-sub">'+t('appSub')+'</div></div>'
    +'</div>'+LangSwitch()+'</div>';
}
function iconWhite(svg){ return '<span style="width:20px;height:20px;color:#fff;display:block;">'+svg+'</span>'; }

function BackRow(view, extra){
  return '<div class="backrow" onclick="go(\''+view+'\''+(extra?','+JSON.stringify(extra):'')+')">'+ICONS.back+'<span>'+t('back')+'</span></div>';
}

function HomeScreen(){
  return TopBar() + '<div class="screen">'
    + '<div class="hero"><div class="hero-title">'+t('heroTitle')+'</div><div class="hero-sub">'+t('heroSub')+'</div></div>'
    + '<div class="role-grid">'
    + '<div class="role-card" onclick="go(\'patient-home\')">'+ICONS.patient+'<div class="lbl">'+t('imPatient')+'</div></div>'
    + '<div class="role-card" onclick="go(\'staff-home\')">'+ICONS.staff+'<div class="lbl">'+t('imStaff')+'</div></div>'
    + '</div></div>';
}

function PatientHome(){
  return TopBar() + '<div class="screen">'
    + BackRow('home')
    + '<div class="section-title">'+t('imPatient')+'</div>'
    + '<div class="big-actions">'
    + '<div class="big-btn" onclick="go(\'patient-new-category\', {draft:newDraft()})"><div class="ic">'+ICONS.plus+'</div><div class="txt"><div class="t1">'+t('newEnquiry')+'</div><div class="t2">'+t('newEnquirySub')+'</div></div></div>'
    + '<div class="big-btn" onclick="go(\'patient-track\')"><div class="ic">'+ICONS.search+'</div><div class="txt"><div class="t1">'+t('trackEnquiry')+'</div><div class="t2">'+t('trackEnquirySub')+'</div></div></div>'
    + '</div></div>';
}

function CategoryPicker(backView, formView, isStaff){
  const d = state.draft;
  const cats = ['appointment','department','billing','other'];
  return TopBar() + '<div class="screen">'
    + BackRow(backView)
    + '<div class="section-title">'+t('whatHelp')+'</div>'
    + '<div class="cat-grid">'
    + cats.map(c=>{
        const label = t('cat'+c.charAt(0).toUpperCase()+c.slice(1));
        const sel = d.category===c ? ' sel' : '';
        return '<div class="cat-card'+sel+'" onclick="selectCategory(\''+c+'\',\''+formView+'\')">'+ICONS[CAT_ICON[c]]+'<div class="lbl">'+label+'</div></div>';
      }).join('')
    + '</div></div>';
}
function selectCategory(cat, formView){
  state.draft.category = cat;
  go(formView);
}

function EnquiryForm(backView, isStaff){
  const d = state.draft;
  const needsDept = d.category === 'department' || d.category === 'appointment';
  return TopBar() + '<div class="screen">'
    + BackRow(backView)
    + '<div class="section-title">'+(isStaff?t('newEnquiry'):t('newEnquiry'))+'</div>'
    + '<label>'+t('yourName')+'</label><input type="text" id="f-name" placeholder="'+t('namePh')+'" value="'+esc(d.name)+'" oninput="state.draft.name=this.value">'
    + '<label>'+t('phoneLabel')+'</label><input type="tel" id="f-phone" placeholder="'+t('phonePh')+'" maxlength="10" value="'+esc(d.phone)+'" oninput="state.draft.phone=this.value.replace(/[^0-9]/g,\'\')">'
    + (needsDept ? '<label>'+t('whichDept')+'</label><select id="f-dept" onchange="state.draft.department=this.value">'
        + '<option value="">'+t('selectDept')+'</option>'
        + DEPARTMENTS.map(dp=>'<option value="'+dp.id+'" '+(d.department===dp.id?'selected':'')+'>'+dp[state.lang]+'</option>').join('')
        + '</select>' : '')
    + '<label>'+t('describe')+'</label><textarea id="f-notes" placeholder="'+t('describePh')+'" oninput="state.draft.notes=this.value">'+esc(d.notes)+'</textarea>'
    + '<div class="toggle-row">'
    + '<div class="toggle'+(!d.urgent?' sel-on':'')+'" onclick="state.draft.urgent=false;render()">'+t('notUrgent')+'</div>'
    + '<div class="toggle'+(d.urgent?' urgent-on':'')+'" onclick="state.draft.urgent=true;render()">'+t('urgent')+'</div>'
    + '</div>'
    + '<button class="primary-btn" onclick="submitDraft()">'+t('submit')+'</button>'
    + '</div>';
}
function esc(s){ return (s||'').replace(/"/g,'&quot;').replace(/</g,'&lt;'); }

function TokenConfirm(){
  const tk = state.lastTicket;
  const spoken = t('yourToken') + '. ' + tk.id + '. ' + t('tokenHelp');
  return TopBar() + '<div class="screen">'
    + '<div class="token-card">'
    + '<div class="lbl">'+t('yourToken')+'</div>'
    + '<div class="num">'+tk.id+'</div>'
    + '<div class="hint">'+t('tokenHelp')+'</div>'
    + '<button class="speak-btn" onclick="speak(\''+spoken.replace(/'/g,"\\'")+'\')">'+ICONS.speaker+'<span>'+t('listen')+'</span></button>'
    + '</div>'
    + '<button class="primary-btn" onclick="go(\'patient-home\')">'+t('doneBtn')+'</button>'
    + '</div>';
}

function PatientTrack(){
  return TopBar() + '<div class="screen">'
    + BackRow('patient-home')
    + '<div class="section-title">'+t('trackEnquiry')+'</div>'
    + '<label>'+t('enterPhone')+'</label>'
    + '<input type="tel" maxlength="10" placeholder="'+t('phonePh')+'" value="'+esc(state.trackPhone)+'" oninput="state.trackPhone=this.value.replace(/[^0-9]/g,\'\')">'
    + '<button class="primary-btn" onclick="doTrack()">'+t('search')+'</button>'
    + (state.trackResults !== null ? renderTrackResults() : '')
    + '</div>';
}
function doTrack(){
  state.trackResults = state.tickets.filter(x=>x.phone===state.trackPhone);
  render();
}
function renderTrackResults(){
  if(state.trackResults.length===0){
    return '<div class="empty">'+ICONS.empty+'<div>'+t('noResults')+'</div></div>';
  }
  return state.trackResults.map(tk=>{
    const spoken = (T[state.lang]['status'+tk.status.charAt(0).toUpperCase()+tk.status.slice(1)]) + '. ' + t('ticketId') + ' ' + tk.id;
    return '<div class="track-result">'
      + '<div style="display:flex;justify-content:space-between;align-items:center;">'
      + '<span class="ticket-token">'+tk.id+'</span>'+statusPill(tk.status)
      + '</div>'
      + '<div class="ticket-meta">'+catLabel(tk.category)+(tk.department?' &middot; '+deptLabel(tk.department):'')+'<br>'+t('created')+': '+fmtTime(tk.createdAt)+'</div>'
      + '<button class="speak-btn" style="background:var(--teal-tint);color:var(--teal-dark);" onclick="speak(\''+spoken.replace(/'/g,"\\'")+'\')">'+iconTeal(ICONS.speaker)+'<span>'+t('listen')+'</span></button>'
      + '</div>';
  }).join('');
}
function iconTeal(svg){ return '<span style="width:15px;height:15px;color:var(--teal-dark);display:inline-flex;">'+svg+'</span>'; }
function catLabel(c){ return t('cat'+c.charAt(0).toUpperCase()+c.slice(1)); }

function StaffHome(){
  return TopBar() + '<div class="screen">'
    + BackRow('home')
    + '<div class="staff-tabs">'
    + '<button class="'+(state.staffTab==='queue'?'active':'')+'" onclick="state.staffTab=\'queue\';render()">'+t('queue')+'</button>'
    + '<button class="'+(state.staffTab==='new'?'active':'')+'" onclick="state.staffTab=\'new\';state.draft=newDraft();render()">'+t('newEnquiry')+'</button>'
    + '<button class="'+(state.staffTab==='dash'?'active':'')+'" onclick="state.staffTab=\'dash\';render()">'+t('dashboard')+'</button>'
    + '</div>'
    + (state.staffTab==='queue' ? StaffQueue() : state.staffTab==='new' ? StaffNewInline() : StaffDashboard())
    + '</div>'
    + (state.openTicket ? TicketDetailSheet() : '');
}

function StaffNewInline(){
  const d = state.draft;
  const cats = ['appointment','department','billing','other'];
  const needsDept = d.category === 'department' || d.category === 'appointment';
  return '<div class="section-title">'+t('newEnquiry')+'</div><div style="font-size:12.5px;color:var(--ink-soft);margin-top:-8px;margin-bottom:14px;">'+t('staffNewSub')+'</div>'
    + '<label>'+t('yourName')+'</label><input type="text" placeholder="'+t('namePh')+'" value="'+esc(d.name)+'" oninput="state.draft.name=this.value">'
    + '<label>'+t('phoneLabel')+'</label><input type="tel" maxlength="10" placeholder="'+t('phonePh')+'" value="'+esc(d.phone)+'" oninput="state.draft.phone=this.value.replace(/[^0-9]/g,\'\')">'
    + '<label>'+t('whatHelp')+'</label>'
    + '<div class="cat-grid">' + cats.map(c=>{
        const sel = d.category===c ? ' sel' : '';
        return '<div class="cat-card'+sel+'" onclick="state.draft.category=\''+c+'\';render()">'+ICONS[CAT_ICON[c]]+'<div class="lbl">'+catLabel(c)+'</div></div>';
      }).join('') + '</div>'
    + (needsDept ? '<label>'+t('whichDept')+'</label><select onchange="state.draft.department=this.value"><option value="">'+t('selectDept')+'</option>'+DEPARTMENTS.map(dp=>'<option value="'+dp.id+'" '+(d.department===dp.id?'selected':'')+'>'+dp[state.lang]+'</option>').join('')+'</select>' : '')
    + '<label>'+t('describe')+'</label><textarea placeholder="'+t('describePh')+'" oninput="state.draft.notes=this.value">'+esc(d.notes)+'</textarea>'
    + '<div class="toggle-row">'
    + '<div class="toggle'+(!d.urgent?' sel-on':'')+'" onclick="state.draft.urgent=false;render()">'+t('notUrgent')+'</div>'
    + '<div class="toggle'+(d.urgent?' urgent-on':'')+'" onclick="state.draft.urgent=true;render()">'+t('urgent')+'</div>'
    + '</div>'
    + '<button class="primary-btn" onclick="submitStaffTicket()">'+t('submit')+'</button>';
}
async function submitStaffTicket(){
  const d = state.draft;
  if(!d.name.trim() || !/^\d{10}$/.test(d.phone.trim()) || !d.category) return;
  const token = await nextTicketNumber();
  const ticket = {id:token, name:d.name.trim(), phone:d.phone.trim(), category:d.category, department:d.department||'', urgent:d.urgent, notes:d.notes.trim(), status:'new', assignedTo:'', resolutionNote:'', createdAt:Date.now(), updatedAt:Date.now(), loggedBy:'staff'};
  state.tickets.unshift(ticket);
  await saveTickets();
  state.draft = newDraft();
  state.staffTab = 'queue';
  render();
}

function StaffQueue(){
  const filters = [['all', t('all')], ['new', t('statusNew')], ['progress', t('statusProgress')], ['resolved', t('statusResolved')], ['urgent', t('urgentOnly')]];
  let list = state.tickets;
  if(state.filter==='urgent') list = list.filter(x=>x.urgent && x.status!=='resolved');
  else if(state.filter!=='all') list = list.filter(x=>x.status===state.filter);
  return '<div class="filter-row">' + filters.map(f=>'<div class="filter-chip '+(state.filter===f[0]?'active':'')+'" onclick="state.filter=\''+f[0]+'\';render()">'+f[1]+'</div>').join('') + '</div>'
    + (list.length===0 ? '<div class="empty">'+ICONS.empty+'<div>'+t('emptyQueue')+'</div></div>' : '<div class="tick-list">' + list.map(ticketCard).join('') + '</div>');
}
function ticketCard(tk){
  return '<div class="tick-card'+(tk.urgent&&tk.status!=='resolved'?' urgent':'')+'" onclick="openTicket(\''+tk.id+'\')">'
    + '<div class="tick-row1"><div><div class="tick-name">'+esc(tk.name)+'</div><div class="tick-cat">'+catLabel(tk.category)+(tk.department?' &middot; '+deptLabel(tk.department):'')+'</div></div>'+statusPill(tk.status)+'</div>'
    + '<div class="ticket-meta"><span class="ticket-token">'+tk.id+'</span> &middot; '+tk.phone+' &middot; '+fmtTime(tk.createdAt)+'</div>'
    + '</div>';
}
function openTicket(id){ state.openTicket = id; render(); }
function closeTicket(){ state.openTicket = null; render(); }

function TicketDetailSheet(){
  const tk = state.tickets.find(x=>x.id===state.openTicket);
  if(!tk) return '';
  return '<div class="overlay" onclick="if(event.target===this)closeTicket()"><div class="sheet">'
    + '<div class="sheet-close"></div>'
    + '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;"><span class="ticket-token" style="font-size:20px;">'+tk.id+'</span>'+statusPill(tk.status)+'</div>'
    + '<div class="ticket-meta">'+t('patient')+': '+esc(tk.name)+' &middot; '+t('phone')+': '+tk.phone+'<br>'+catLabel(tk.category)+(tk.department?' &middot; '+deptLabel(tk.department):'')+'<br>'+t('created')+': '+fmtTime(tk.createdAt)+(tk.urgent?' &middot; <b style="color:var(--coral)">'+t('urgent')+'</b>':'')+'</div>'
    + (tk.notes ? '<div style="background:var(--paper);border:1px solid var(--line);border-radius:10px;padding:10px 12px;margin-top:10px;font-size:13.5px;">'+esc(tk.notes)+'</div>' : '')
    + '<label>'+t('assignTo')+'</label><input type="text" id="d-assign" placeholder="'+t('assignPh')+'" value="'+esc(tk.assignedTo)+'">'
    + '<label>'+t('resolutionNote')+'</label><textarea id="d-resnote" placeholder="'+t('resNotePh')+'">'+esc(tk.resolutionNote)+'</textarea>'
    + '<button class="ghost-btn" onclick="saveDetail(\''+tk.id+'\')">'+t('saveUpdate')+'</button>'
    + (tk.status!=='progress' ? '<button class="primary-btn" onclick="updateStatus(\''+tk.id+'\',\'progress\')">'+t('markProgress')+'</button>' : '')
    + (tk.status!=='resolved' ? '<button class="primary-btn" style="background:var(--sage);" onclick="updateStatus(\''+tk.id+'\',\'resolved\')">'+t('markResolved')+'</button>' : '')
    + '<button class="ghost-btn" onclick="closeTicket()">'+t('close')+'</button>'
    + '</div></div>';
}
function saveDetail(id){
  const a = document.getElementById('d-assign').value;
  const r = document.getElementById('d-resnote').value;
  saveTicketDetails(id, a, r);
}

function StaffDashboard(){
  const today = new Date(); today.setHours(0,0,0,0);
  const todays = state.tickets.filter(x=>x.createdAt >= today.getTime());
  const pending = state.tickets.filter(x=>x.status!=='resolved').length;
  const urgentOpen = state.tickets.filter(x=>x.urgent && x.status!=='resolved').length;
  const resolvedToday = todays.filter(x=>x.status==='resolved').length;
  return '<div class="stat-grid">'
    + statCard(todays.length, t('totalToday'))
    + statCard(pending, t('pendingCount'))
    + statCard(urgentOpen, t('urgentCount'))
    + statCard(resolvedToday, t('resolvedCount'))
    + '</div>'
    + '<div class="section-title">'+t('queue')+'</div>'
    + (state.tickets.length===0 ? '<div class="empty">'+ICONS.empty+'<div>'+t('emptyQueue')+'</div></div>' : '<div class="tick-list">'+state.tickets.slice(0,6).map(ticketCard).join('')+'</div>');
}
function statCard(n,l){ return '<div class="stat-card"><div class="stat-num">'+n+'</div><div class="stat-lbl">'+l+'</div></div>'; }

function render(){
  const root = document.getElementById('root');
  let html = '';
  if(!state.loaded){ root.innerHTML = '<div style="padding:40px;text-align:center;color:var(--ink-soft);">...</div>'; return; }
  switch(state.view){
    case 'home': html = HomeScreen(); break;
    case 'patient-home': html = PatientHome(); break;
    case 'patient-new-category': html = CategoryPicker('patient-home','patient-new-form',false); break;
    case 'patient-new-form': html = EnquiryForm('patient-new-category',false); break;
    case 'token-confirm': html = TokenConfirm(); break;
    case 'patient-track': html = PatientTrack(); break;
    case 'staff-home': html = StaffHome(); break;
    default: html = HomeScreen();
  }
  html += '<div class="note">'+ (state.lang==='en' ? 'Demo prototype &middot; data is stored for this app instance' : state.lang==='te' ? 'డెమో ప్రోటోటైప్ &middot; డేటా ఈ యాప్ కోసం నిల్వ చేయబడింది' : 'डेमो प्रोटोटाइप &middot; डेटा इस ऐप के लिए संग्रहीत है') + '</div>';
  root.innerHTML = '<div class="app '+(state.lang!=='en'?'lang-'+state.lang:'')+'">' + html + '</div>';
}
