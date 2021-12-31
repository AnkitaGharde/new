var state_district_json = '';
$(function() {
    state_district_json = {
        "states": [{
            "state": "Andhra Pradesh",
            "districts": ["Anantapur", "Chittoor Rural", "East Godavari", "Guntur Rural", "Guntur Urban", "Krishna", "Kurnool", "Potti SriRamulu Nellore", "Prakasam", "Rajahmundry Urban", "Srikakulam", "Tirupathi Urban", "Vijayawada City", "Visakhapatnam Rural", "Visakhapatnam Urban", "Vizianagaram", "West Godavari", "YSR District"]
        }, {
            "state": "Arunachal Pradesh",
            "districts": ["Anjaw", "Changlang", "Dibang Valley", "East Kameng", "East Siang", "Kurung Kumey", "Lohit", "Lower Dibang Valley", "Lower Subansiri", "Namsai", "Papumpare", "Tawang", "Tirap", "Upper Siang", "Upper Subansiri", "West Kameng", "West Siang"]
        }, {
            "state": "Assam",
            "districts": ["Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup", "Kamrup (Metropolitan)", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "North Cachar Hills", "Sadiya", "Sibsagar", "Sonitpur", "South Salmara-Mankachar", "Tinsukia", "Udalguri", "West Karbi-Anglong"]
        }, {
            "state": "Bihar",
            "districts": ["Araria", "Arwal", "Aurangabad", "Bihar", "Bagaha", "Banka", "Begusarai", "Bettiah", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur (Bhabua)", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnea", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali"]
        }, {
            "state": "Chandigarh",
            "districts": ["Chandigarh"]
        }, {
            "state": "Chattisgarh",
            "districts": ["Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Gariaband", "Janjgir-Champa", "Jashpur", "Kabirdham", "Kanker", "Kondagaon", "Korba", "Koriya", "Mahasamund", "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon", "Sukma", "Surajpur", "Surguja"]
        }, {
            "state": "Dadra and Nagar Haveli",
            "districts": ["DadraNagarHaveli"]
        }, {
            "state": "Daman and Diu",
            "districts": ["Daman", "Diu"]
        }, {
            "state": "Delhi",
            "districts": ["Central Delhi", "Dwarka", "East Delhi", "New Delhi", "North Delhi", "North East Delhi", "North West Delhi", "Outer Delhi", "Outer North Delhi", "Rohini", "Shahdara", "South Delhi", "South East Delhi", "South West Delhi", "West Delhi"]
        }, {
            "state": "Goa",
            "districts": ["North Goa", "South Goa"]
        }, {
            "state": "Gujarat",
            "districts": ["Ahmedabad", "Ahmedabad Rural", "Amreli", "Anand", "Arvalli", "Banaskantha", "Bharuch", "Bhavnagar", "Botad", "Chhotaudepur", "Dahod", "Dang", "Devbhumi Dwarka", "East-Kutch Gandhidham", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kheda", "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahals", "Patan", "Porbandar", "Rajkot", "Rajkot rural", "Sabarkantha", "Surat City", "Surat Rural", "Surendranagar", "Tapi (Vyara)", "Vadodara", "Vadodara rural", "Valsad", "West-Kutch Bhuj"]
        }, {
            "state": "Haryana",
            "districts": ["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurgaon", "Hansi", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Mewat Nuh", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"]
        }, {
            "state": "Himachal Pradesh",
            "districts": ["Baddi", "Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una"]
        }, {
            "state": "Jammu and kashmir",
            "districts": ["Anantnag", "Awantipora", "Bandipora", "Baramulla", "Budgam", "Doda", "Ganderbal", "Handwara", "Jammu", "Kargil", "Kathua", "Kishtwar", "Kulgam", "Kupwara", "Poonch", "Pulwama", "Rajouri", "Ramban", "Reasi", "Samba", "Shopian", "Sopore", "Srinagar", "Udhampur"]
        }, {
            "state": "Jharkhand",
            "districts": ["Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribag", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi", "Sahibganj", "Saraikela Kharsawan", "Simdega", "West Singhbhum"]
        }, {
            "state": "Karnataka",
            "districts": ["BELAGAVI CITY", "Bagalkot", "Ballari", "Belagavi", "Bengaluru", "Bengaluru Rural", "Bidar", "Chamrajanagar", "Chikballapur", "Chikkamagaluru", "Chitradurga", "Dakshina Kannada", "Davangere", "Dharwad", "Gadag", "Hassan", "Haveri", "Hubballi-Dharwad City", "KGF (Kolar)", "Kalaburagi", "Kalaburagi City", "Karwar", "Kodagu", "Kolar", "Koppal", "Mandya", "Mangaluru City", "Mysuru city", "Mysuru District", "Raichur", "Ramanagar", "Shivamogga", "Tumakuru", "Udupi", "Vijayapura", "Yadgir"]
        }, {
            "state": "Kerala",
            "districts": ["Alappuzha", "Ernakulam City", "Ernakulam Rural", "Idukki", "Kannur", "Kasargod", "Kollam City", "Kollam Rural", "Kottayam", "Kozhikode City", "Kozhikode Rural", "Malappuram", "Palakkad", "Pathanamthitta", "Thrissur City", "Thrissur Rural", "Trivandrum City", "Trivandrum Rural", "Wayanad"]
        }, {
            "state": "Ladakh",
            "districts": ["Kargil", "Leh"]
        }, {
            "state": "Lakshadweep",
            "districts": ["Lakshadweep"]
        }, {
            "state": "Madhya Pradesh",
            "districts": ["Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Badwani", "Balaghat", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Niwari", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"]
        }, {
            "state": "Maharashtra",
            "districts": ["Ahmednagar", "Akola", "Amravati City", "Amravati Rural", "Aurangabad", "Aurangabad Rural", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai", "Nagpur City", "Nagpur Rural", "Nanded", "Nandurbar", "Nashik City", "Nashik Rural", "Navi Mumbai", "Osmanabad", "Palghar", "Parbhani", "Pimpri Chinchwad", "Pune City", "Pune Rural", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur City", "Solapur Rural", "Thane City", "Thane Rural", "Wardha", "Washim", "Yavatmal"]
        }, {
            "state": "Manipur",
            "districts": ["Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Jiribam", "Kakching", "Senapati", "Tamenglong", "Thoubal", "Ukhrul"]
        }, {
            "state": "Meghalaya",
            "districts": ["East Garo Hills", "East Jaintia Hills", "East Khasi Hills", "North Garo Hills", "Ri Bhoi", "South Garo Hills", "South West Garo Hills", "South West Khasi Hills", "West Garo Hills", "West Jaintia Hills", "West Khasi Hills"]
        }, {
            "state": "Mizoram",
            "districts": ["Aizawl", "Champhai", "Chhimtuipui", "Hnanthial", "Khawzawl", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Sadar Hills", "Saiha", "Saitual", "Serchhip"]
        }, {
            "state": "Nagaland",
            "districts": ["Chumukidema", "Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Peren", "Phek", "Tuensang", "Wokha", "Zunheboto"]
        }, {
            "state": "Odisha",
            "districts": ["Anugul", "Balasore", "Baragarh", "Berhampur", "Bhadrak", "Bhubaneswar Urban", "Bolangir", "Boudh", "Cuttack Rural", "Cuttack Urban", "Deogarh", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghapur", "Jajpur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Keonjhar", "Khurda", "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh", "Nuapada", "Puri", "Rayagada", "Rourkela", "Sambalpur", "Subarnapur", "Sundergarh"]
        }, {
            "state": "Puducherry",
            "districts": ["Karaikal", "Mahe", "Puducherry", "Yanam"]
        }, {
            "state": "Punjab",
            "districts": ["Amritsar", "Amritsar Rural", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozepur", "Gurdaspur", "Gurdaspur (Batala)", "Hoshiarpur", "Jagraon (Ludhiana)", "Jalandhar", "Jalandhar Rural", "Kapurthala", "Khanna (Ludhiana)", "Ludhiana", "Mansa", "Moga", "Pathankot", "Patiala", "Ropar", "SAS Nagar", "SBS Nagar", "Sangrur", "Sri Muktsar Sahib", "Tarn Taran"]
        }, {
            "state": "Rajasthan",
            "districts": ["Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bhiwadi", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Dholpur", "Dungarpur", "Hanumangarh", "Jaipur City", "Jaipur Rural", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur City", "Jodhpur Rural", "Karauli", "Kota City", "Kota Rural", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Sri Ganganagar", "Tonk", "Udaipur"]
        }, {
            "state": "Sikkim",
            "districts": ["East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim"]
        }, {
            "state": "Tamil Nadu",
            "districts": ["Ariyalur", "Chennai", "Coimbatore urban", "Coimbatore rural", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai City", "Madurai", "Nagapattinam", "Namakkal", "Perambalur", "Pudukkottai", "Ramanathapuram", "Salem urban", "Salem rural", "Sivaganga", "Tenkasi", "Thanjavur", "The Nilgiris", "Theni", "Thiruvarur", "Thoothukudi", "Tiruchirappalli Rural", "Tiruchirappalli Urban", "Tirunelveli City", "Tirunelveli Rural", "Tiruppur", "Tiruppur City", "Tiruvallur", "Tiruvannamalai", "Vellore", "Viluppuram", "Virudhunagar"]
        }, {
            "state": "Telengana",
            "districts": ["Adilabad", "Bhadradri Kothagudem", "Cyberabad 1", "Cyberabad 2", "Cyberabad 3", "Cyberabad 4", "Hyderabad", "Jagityal", "Jayashankar Bhupalpally", "Jogulamba Gadwal", "Kamareddy", "Karimnagar", "Khammam", "Komarambheem Asifabad", "Mahabubabad", "Mahabubnagar", "Medak", "Mulugu", "Nagarkurnool", "Nalgonda", "Narayanpet", "Nirmal", "Nizamabad", "Rachakonda 1", "Rachakonda 2", "Rachakonda 3", "Rajanna Sircilla", "Ramagundam 1", "Ramagundam 2", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal 1", "Warangal 2", "Warangal 3"]
        }, {
            "state": "Tripura",
            "districts": ["Dhalai", "Gomati", "Khowai", "North Tripura", "Shipahijala", "South Tripura", "Unakoti", "West Tripura"]
        }, {
            "state": "Uttar Pradesh",
            "districts": ["Agra", "Aligarh", "Allahabad", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Azamgarh", "Badaun", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bijnor", "Bulandshahr", "Chandauli", "Chitrakut", "Deoria", "Etah", "Etawah", "Faizabad", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kasganj", "Kaushambi", "Kushi Nagar", "Lakhimpur Kheri", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "RaeBareli", "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Sant Ravidas Nagar", "Shahjahanpur", "Shamli", "Shrawasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"]
        }, {
            "state": "Uttrakhand",
            "districts": ["Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh", "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi"]
        }, {
            "state": "West Bengal",
            "districts": ["Alipurduar", "Bankura", "Barrackpore", "Baruipur", "Basirhat", "Bidhannagar", "Birbhum", "Chandannagar", "Cooch Behar", "Darjeeling", "Diamond Harbour", "East Medinipur", "Hooghly Rural", "Howrah", "Howrah Rural", "Islampur", "Jalpaiguri", "Kolkata", "Malda", "Murshidabad", "Nadia", "North 24 Parganas", "Paschim Bardhaman", "Purba Bardhaman", "Purulia", "RANAGHAT", "SUNDARBAN", "Siliguri", "South Dinajpur", "Uttar Dinajpur", "West Medinipur"]
        }]
    };

    var optionscity = '';
    optionscity += "<option value=''>Select State</option>";
    $.each(state_district_json.states, function(key, value) {
        var str = value.state;
        str = str.replace(/\s/g, '');
        optionscity += "<option  value=" + str + ">" + value.state + "</option>";
    });
    $("#state1").html(optionscity);
    $("#state2").html(optionscity);
    $("#per_state").html(optionscity);
    $("#state_prop").html(optionscity);
    $("#state_firm").html(optionscity);
    $("#compState").html(optionscity);
    $("#state_opc").html(optionscity);
    $("#state_llp").html(optionscity);
    $("#state_society").html(optionscity);
    $("#state_plc").html(optionscity);
    $("#state_huf").html(optionscity);
    $("#state_surrender").html(optionscity);
    $("#state_modification").html(optionscity);
    $("#casual_state_prop").html(optionscity);
    $("#casual_state_firm").html(optionscity);
    $("#casual_state_plc").html(optionscity);
    $("#casual_state_llp").html(optionscity);
    $("#casual_state_opc").html(optionscity);
    $("#casual_state_society").html(optionscity);
    $("#casual_state_huf").html(optionscity);
});

function appendDistrict(stt, addrs) {
    var optionsdist = '';
    optionsdist += "<option value=''>Select District</option>";
    $.each(state_district_json.states, function(key, value) {
        var str1 = value.state;
        str1 = str1.replace(/\s/g, '');
        if (stt == str1) {
            $.each(value.districts, function(key2, value2) {
                var str2 = value2;
                str2 = str2.replace(/\s/g, '');
                optionsdist += "<option  value=" + str2 + ">" + value2 + "</option>";
            });
        }
    });
    if (addrs == 'birth_addr') {
        $("#district1").html(optionsdist);
    }
    if (addrs == 'pres_addr') {
        $("#district2").html(optionsdist);
    }
    if (addrs == 'perm_addr') {
        $("#per_district").html(optionsdist);
    }
    if (addrs == 'prop_addr') {
        $("#district_prop").html(optionsdist);
    }
    if (addrs == 'firm_addr') {
        $("#district_firm").html(optionsdist);
    }
    if (addrs == 'opc_addr') {
        $("#district_opc").html(optionsdist);
    }
    if (addrs == 'llp_addr') {
        $("#district_llp").html(optionsdist);
    }
    if (addrs == 'society_addr') {
        $("#district_society").html(optionsdist);
    }
    if (addrs == 'plc_addr') {
        $("#district_plc").html(optionsdist);
    }
    if (addrs == 'huf_addr') {
        $("#district_huf").html(optionsdist);
    }

    if (addrs == 'casual_prop_addr') {
        $("#casual_district_prop").html(optionsdist);
    }
    if (addrs == 'casual_firm_addr') {
        $("#casual_district_firm").html(optionsdist);
    }
    if (addrs == 'casual_plc_addr') {
        $("#casual_district_plc").html(optionsdist);
    }
    if (addrs == 'casual_llp_addr') {
        $("#casual_district_llp").html(optionsdist);
    }
    if (addrs == 'casual_opc_addr') {
        $("#casual_district_opc").html(optionsdist);
    }
    if (addrs == 'casual_society_addr') {
        $("#casual_district_society").html(optionsdist);
    }
    if (addrs == 'casual_huf_addr') {
        $("#casual_district_huf").html(optionsdist);
    }
}