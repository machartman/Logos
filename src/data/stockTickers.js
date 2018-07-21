const stockTickers = [ 
  "PIH", 
  "PIHPP", 
  "TURN", 
  "FLWS", 
  "FCCY", 
  "SRCE", 
  "VNET", 
  "TWOU", 
  "JOBS", 
  "EGHT", 
  "AVHI", 
  "SHLM", 
  "AAON", 
  "ABAX", 
  "ABEO", 
  "ABEOW", 
  "ABIL", 
  "ABMD", 
  "AXAS", 
  "ACIU", 
  "ACIA", 
  "ACTG", 
  "ACHC", 
  "ACAD", 
  "ACST", 
  "AXDX", 
  "XLRN", 
  "ANCX", 
  "ARAY", 
  "ACRX", 
  "ACER", 
  "ACET", 
  "AKAO", 
  "ACHV", 
  "ACHN", 
  "ACIW", 
  "ACRS", 
  "ACMR", 
  "ACNB", 
  "ACOR", 
  "ATVI", 
  "ACXM", 
  "ADMS", 
  "ADMP", 
  "ADAP", 
  "ADUS", 
  "AEY", 
  "IOTS", 
  "ADMA", 
  "ADBE", 
  "ADOM", 
  "ADTN", 
  "ADRO", 
  "ADES", 
  "AEIS", 
  "AMD", 
  "ADXS", 
  "ADXSW", 
  "ADVM", 
  "DWMC", 
  "DWSH", 
  "ACT", 
  "AEGN", 
  "AGLE", 
  "AEHR", 
  "AMTX", 
  "AERI", 
  "AVAV", 
  "ARPO", 
  "AEZS", 
  "AEMD", 
  "GNMX", 
  "AFMD", 
  "AGEN", 
  "AGRX", 
  "AGYS", 
  "AGIO", 
  "AGMH", 
  "AGNC", 
  "AGNCB", 
  "AGNCN", 
  "AGFS", 
  "AGFSW", 
  "ALRN", 
  "AIMT", 
  "AIRT", 
  "ATSG", 
  "AIRG", 
  "AMCN", 
  "AKAM", 
  "AKTX", 
  "AKCA", 
  "AKBA", 
  "AKER", 
  "AKRX", 
  "AKTS", 
  "ALRM", 
  "ALSK", 
  "ALBO", 
  "ABDC", 
  "ALDR", 
  "ALDX", 
  "ALXN", 
  "ALCO", 
  "ALGN", 
  "ALIM", 
  "ALJJ", 
  "ALKS", 
  "ABTX", 
  "ALGT", 
  "ALGRU", 
  "ALNA", 
  "AMMA", 
  "ARLP", 
  "AHPI", 
  "AMOT", 
  "ALQA", 
  "ALLT", 
  "MDRX", 
  "ALNY", 
  "AOSL", 
  "GOOG", 
  "GOOGL", 
  "SMCP", 
  "ATEC", 
  "ALPN", 
  "SWIN", 
  "AMR", 
  "AMRWW", 
  "AABA", 
  "ALTR", 
  "ALT", 
  "ASPS", 
  "AIMC", 
  "AMAG", 
  "AMRN", 
  "AMRK", 
  "AMZN", 
  "AMBC", 
  "AMBCW", 
  "AMBA", 
  "AMCX", 
  "DOX", 
  "AMDA", 
  "AMED", 
  "UHAL", 
  "AMRH", 
  "AMRHW", 
  "ATAX", 
  "AMOV", 
  "AAL", 
  "ACSF", 
  "AETI", 
  "AMNB", 
  "ANAT", 
  "AOBC", 
  "APEI", 
  "ARII", 
  "AMRB", 
  "AMSWA", 
  "AMSC", 
  "AMWD", 
  "CRMT", 
  "ABCB", 
  "AMSF", 
  "ASRV", 
  "ASRVP", 
  "ATLO", 
  "AMGN", 
  "FOLD", 
  "AMKR", 
  "AMPH", 
  "IBUY", 
  "ASYS", 
  "AFSI", 
  "AMRS", 
  "ADI", 
  "ANAB", 
  "AVXL", 
  "ANCB", 
  "ANGI", 
  "ANGO", 
  "ANIP", 
  "ANIK", 
  "ANSS", 
  "ATRS", 
  "APLS", 
  "APOG", 
  "APEN", 
  "AINV", 
  "AMEH", 
  "APPF", 
  "APPN", 
  "AAPL", 
  "ARCI", 
  "APDN", 
  "APDNW", 
  "AGTC", 
  "AMAT", 
  "AAOI", 
  "AREX", 
  "APTI", 
  "APRI", 
  "APVO", 
  "APTX", 
  "APTO", 
  "AQMS", 
  "AQB", 
  "AQXP", 
  "ARDM", 
  "ARLZ", 
  "PETX", 
  "ABUS", 
  "ARCW", 
  "ABIO", 
  "RKDA", 
  "ARCB", 
  "ACGL", 
  "ACGLO", 
  "ACGLP", 
  "FUV", 
  "ARCT", 
  "ARDX", 
  "ARNA", 
  "ARCC", 
  "ARGX", 
  "ARKR", 
  "ARTX", 
  "ARQL", 
  "ARRY", 
  "ARRS", 
  "DWCR", 
  "DWAT", 
  "AROW", 
  "ARWR", 
  "ASNS", 
  "ARTNA", 
  "ARTW", 
  "ASNA", 
  "ASND", 
  "ASCMA", 
  "APWC", 
  "ASLN", 
  "ASML", 
  "ASPU", 
  "AZPN", 
  "ASMB", 
  "ASFI", 
  "ASTE", 
  "ATRO", 
  "ALOT", 
  "ASTC", 
  "ASUR", 
  "ASV", 
  "ATAI", 
  "ATRA", 
  "ATHN", 
  "ATNX", 
  "ATHX", 
  "ATAC", 
  "ATACR", 
  "ATACU", 
  "AAME", 
  "ACBI", 
  "AY", 
  "ATLC", 
  "AAWW", 
  "AFH", 
  "AFHBL", 
  "TEAM", 
  "ATNI", 
  "ATOM", 
  "ATOS", 
  "ATRC", 
  "ATRI", 
  "ATIS", 
  "ATISW", 
  "ATTU", 
  "LIFE", 
  "AUBN", 
  "BOLD", 
  "AUDC", 
  "AUPH", 
  "EARS", 
  "ADSK", 
  "AUTL", 
  "ADP", 
  "AUTO", 
  "AVDL", 
  "ATXI", 
  "AVEO", 
  "AVNW", 
  "CDMO", 
  "CDMOP", 
  "AVID", 
  "AVGR", 
  "CAR", 
  "AHPA", 
  "AHPAU", 
  "AHPAW", 
  "AVT", 
  "AVRO", 
  "AWRE", 
  "ACLS", 
  "AXGN", 
  "AAXN", 
  "AXON          ", 
  "AXSM", 
  "AXTI", 
  "AYTU", 
  "AZRX", 
  "BCOM", 
  "RILY", 
  "RILYG", 
  "RILYH", 
  "RILYL", 
  "RILYZ", 
  "BOSC", 
  "BIDU", 
  "BCPC", 
  "BWINA", 
  "BWINB", 
  "BLDP", 
  "BANF", 
  "BANFP", 
  "BCTF", 
  "BAND", 
  "BOCH", 
  "BMRC", 
  "BMLP", 
  "BKSC", 
  "BOTJ", 
  "OZK", 
  "BFIN", 
  "BWFG", 
  "BANR", 
  "BZUN", 
  "DFVL", 
  "DFVS", 
  "DLBL", 
  "DLBS", 
  "DTUL", 
  "DTUS", 
  "DTYL", 
  "DTYS", 
  "FLAT", 
  "STPP", 
  "TAPR", 
  "BHAC", 
  "BHACR", 
  "BHACU", 
  "BHACW", 
  "BBSI", 
  "BSET", 
  "BCML", 
  "BCBP", 
  "BECN", 
  "BBGI", 
  "BBBY", 
  "BGNE", 
  "BELFA", 
  "BELFB", 
  "BLPH", 
  "BLCM", 
  "BNCL", 
  "BNFT", 
  "BNTC", 
  "BNTCW", 
  "BYSI", 
  "BGCP", 
  "BGFV", 
  "BRPA", 
  "BRPAR", 
  "BRPAU", 
  "BRPAW", 
  "BILI", 
  "BASI", 
  "ORPN", 
  "BIOC", 
  "BCRX", 
  "BDSI", 
  "BFRA", 
  "BIIB", 
  "BHTG", 
  "BKYI", 
  "BIOL", 
  "BLFS", 
  "BLRX", 
  "BMRN", 
  "BMRA", 
  "BVXV", 
  "BVXVW", 
  "BPTH", 
  "BIOS", 
  "BSTC", 
  "BSPM", 
  "TECH", 
  "BEAT", 
  "BTAI", 
  "BCAC", 
  "BCACR", 
  "BCACU", 
  "BCACW", 
  "BJRI", 
  "BBOX", 
  "BRAC", 
  "BRACR", 
  "BRACU", 
  "BRACW", 
  "BLKB", 
  "BL", 
  "BKCC", 
  "BLNK", 
  "BLNKW", 
  "BLMN", 
  "BCOR", 
  "BLBD", 
  "BHBK", 
  "BLUE", 
  "BKEP", 
  "BKEPP", 
  "BPMC", 
  "ITEQ", 
  "BMCH", 
  "BOFI", 
  "BOFIL", 
  "WIFI", 
  "BOJA", 
  "BOKF", 
  "BOKFL", 
  "BNSO", 
  "BKNG", 
  "BRQS", 
  "BOMN", 
  "BPFH", 
  "BPFHW", 
  "EPAY", 
  "BOXL", 
  "BCLI", 
  "BVNSC", 
  "BDGE", 
  "BLIN          ", 
  "BWB", 
  "BRID", 
  "BCOV", 
  "BHF", 
  "AVGO", 
  "BVSN", 
  "BYFC", 
  "BWEN", 
  "BPY", 
  "BRKL", 
  "BRKS", 
  "BRKR", 
  "BMTC", 
  "BLMT", 
  "BSQR", 
  "BLDR", 
  "BFST", 
  "CFFI", 
  "CHRW", 
  "CA", 
  "CCMP", 
  "CDNS", 
  "CDZI", 
  "CZR", 
  "CSTE", 
  "PRSS", 
  "CLBS", 
  "CHY", 
  "CHI", 
  "CCD", 
  "CHW", 
  "CGO", 
  "CSQ", 
  "CAMP", 
  "CVGW", 
  "CALA", 
  "CALM", 
  "CLMT", 
  "CRUSC", 
  "CLXT", 
  "ABCD", 
  "CATC", 
  "CAC", 
  "CAMT", 
  "CSIQ", 
  "CGIX", 
  "CPHC", 
  "CPLA", 
  "CCBG", 
  "CPLP", 
  "CSWC", 
  "CSWCL", 
  "CPTA", 
  "CPTAG", 
  "CPTAL", 
  "CFFN", 
  "CAPR", 
  "CSTR", 
  "CPST", 
  "CARA", 
  "CBLK", 
  "CARB", 
  "CSII", 
  "CDLX", 
  "CATM", 
  "CDNA", 
  "CECO", 
  "CTRE", 
  "CARG", 
  "CARO", 
  "CART", 
  "CRZO", 
  "TAST", 
  "CARV", 
  "CASM", 
  "CASA", 
  "CWST", 
  "CASY", 
  "CASI", 
  "CASS", 
  "CATB", 
  "CBIO", 
  "CPRX", 
  "CATS", 
  "CATY", 
  "CATYW", 
  "CGVIC", 
  "CIVEC", 
  "CVCO", 
  "CBFV", 
  "CBAK", 
  "CBOE", 
  "CBTX", 
  "CDK", 
  "CDTI", 
  "CDW", 
  "CECE", 
  "CELC", 
  "CELG", 
  "CELGZ", 
  "CLDX", 
  "APOP", 
  "APOPW", 
  "CLRB", 
  "CLRBW", 
  "CLRBZ", 
  "CLLS", 
  "CBMG", 
  "CLSN", 
  "CELH", 
  "CYAD", 
  "CETX", 
  "CETXP", 
  "CETXW", 
  "CDEV", 
  "CSFL", 
  "CETV", 
  "CFBK", 
  "CENT", 
  "CENTA", 
  "CVCY", 
  "CENX", 
  "CNBKA", 
  "CNTY", 
  "CRNT", 
  "CERC", 
  "CERCW", 
  "CERN", 
  "CERS", 
  "KOOL", 
  "CEVA", 
  "CSBR", 
  "CYOU", 
  "BURG", 
  "CTHR", 
  "GTLS", 
  "CHTR", 
  "CHFN", 
  "CHKP", 
  "CHEK", 
  "CHEKW", 
  "CHEKZ", 
  "CKPT", 
  "CEMI", 
  "CHFC", 
  "CCXI", 
  "CHMG", 
  "CHKE", 
  "CHFS", 
  "CHMA", 
  "CSSE", 
  "CSSEP", 
  "PLCE", 
  "CMRX", 
  "CADC", 
  "CALI", 
  "CAAS", 
  "CBPO", 
  "CCCL", 
  "GLG", 
  "CCRC", 
  "JRJC", 
  "HGSH", 
  "CIFS", 
  "CJJD", 
  "CLDC", 
  "CHNR", 
  "CREG", 
  "CNTF", 
  "CXDC", 
  "CCIH", 
  "CNET", 
  "IMOS", 
  "CDXC", 
  "CHSCL", 
  "CHSCM", 
  "CHSCN", 
  "CHSCO", 
  "CHSCP", 
  "CHDN", 
  "CHUY", 
  "CDTX", 
  "CMCT", 
  "CMCTP", 
  "CMPR", 
  "CINF", 
  "CIDM", 
  "CTAS", 
  "CRUS", 
  "CSCO", 
  "CTRN", 
  "CTXR", 
  "CTXRW", 
  "CZNC", 
  "CZWI", 
  "CZFC", 
  "CIZN", 
  "CTXS", 
  "CHCO", 
  "CIVB", 
  "CIVBP", 
  "CLAR", 
  "CLNE", 
  "CACG", 
  "YLDE", 
  "LRGE", 
  "CLFD", 
  "CLRO", 
  "CLSD", 
  "CLIR", 
  "CLIRW", 
  "CMTA", 
  "CBLI", 
  "CLVS", 
  "CLPS", 
  "CMFN", 
  "CMFNL", 
  "CMSS", 
  "CMSSR", 
  "CMSSU", 
  "CMSSW", 
  "CME", 
  "CCNE", 
  "CWAY", 
  "COBZ", 
  "COKE", 
  "COCP", 
  "CODA", 
  "CDXS", 
  "CODX", 
  "CVLY", 
  "JVA", 
  "CCOI", 
  "CGNX", 
  "CTSH", 
  "CWBR", 
  "COHR", 
  "CHRS", 
  "COHU", 
  "CLCT", 
  "COLL", 
  "CIGI", 
  "CLGN", 
  "CBAN", 
  "COLB", 
  "CLBK", 
  "COLM", 
  "CMCO", 
  "CMCSA", 
  "CCNI", 
  "CBSH", 
  "CBSHP", 
  "CVGI", 
  "COMM", 
  "JCS", 
  "ESXB", 
  "CFBI", 
  "CYHHZ", 
  "CTBI", 
  "CWBC", 
  "CVLT", 
  "CGEN", 
  "CPSI", 
  "CTG", 
  "SCOR", 
  "CHCI", 
  "CMTL", 
  "CNAT", 
  "CNCE", 
  "CDOR", 
  "CFMS", 
  "CNFR", 
  "CNMD", 
  "CTWS", 
  "CNOB", 
  "CONN", 
  "CNSL", 
  "CWCO", 
  "CNAC", 
  "CNACR", 
  "CNACU", 
  "CNACW", 
  "ROAD", 
  "CPSS", 
  "CFRX", 
  "CTRV", 
  "CTRL", 
  "CVON", 
  "AWSM", 
  "CPRT", 
  "CRBP", 
  "CORT", 
  "CORE", 
  "CORI", 
  "CSOD", 
  "CORV", 
  "CRVL", 
  "CRVS", 
  "CSGP", 
  "COST", 
  "CPAH", 
  "ICBK", 
  "COUP", 
  "CVTI", 
  "COWN", 
  "COWNL", 
  "COWNZ", 
  "PMTS", 
  "CPSH", 
  "CRAI", 
  "CBRL", 
  "BREW", 
  "CRAY", 
  "CACC", 
  "DGLD", 
  "DSLV", 
  "GLDI", 
  "SLVO", 
  "TVIX", 
  "TVIZ", 
  "UGLD", 
  "USLV", 
  "USOI", 
  "VIIX", 
  "VIIZ", 
  "ZIV", 
  "CREE", 
  "CRESY", 
  "CRSP", 
  "CRTO", 
  "CROX", 
  "CRON", 
  "CCRN", 
  "CRWS", 
  "CYRX", 
  "CYRXW", 
  "CSGS", 
  "CCLP", 
  "CSPI", 
  "CSWI", 
  "CSX", 
  "CTIC", 
  "CTIB", 
  "CTRP", 
  "CUE", 
  "CUI", 
  "CPIX", 
  "CRIS", 
  "CUTR", 
  "CVBF", 
  "CVV", 
  "CYAN", 
  "CYBR", 
  "CYBE", 
  "CYCC", 
  "CYCCP", 
  "CBAY", 
  "CY", 
  "CYRN", 
  "CONE", 
  "CYTK", 
  "CTMX", 
  "CYTX", 
  "CYTXW", 
  "CYTXZ", 
  "CTSO", 
  "CYTR", 
  "DJCO", 
  "DAKT", 
  "DARE", 
  "DRIO", 
  "DRIOW", 
  "DZSI", 
  "DSKE", 
  "DSKEW", 
  "DAIO", 
  "DWCH", 
  "PLAY", 
  "DTEA", 
  "DFNL", 
  "DINT", 
  "DUSA", 
  "DWLD", 
  "DWSN", 
  "DBVT", 
  "DCPH", 
  "DFRG", 
  "TACO", 
  "TACOW", 
  "DMPI", 
  "DELT", 
  "DNLI", 
  "DENN", 
  "XRAY", 
  "DEPO", 
  "DDOC", 
  "DERM", 
  "DEST", 
  "DXLG", 
  "DSWL", 
  "DTRM", 
  "DXCM", 
  "DFBH", 
  "DFBHU", 
  "DFBHW", 
  "DHXM", 
  "DHIL", 
  "FANG", 
  "DCIX", 
  "DRNA", 
  "DFBG", 
  "DFFN", 
  "DGII", 
  "DMRC", 
  "DRAD", 
  "DGLY", 
  "APPS", 
  "DCOM", 
  "DIOD", 
  "DISCA", 
  "DISCB", 
  "DISCK", 
  "DISH", 
  "DVCR", 
  "SAUC", 
  "DLHC", 
  "BOOM", 
  "DNBF", 
  "DOCU", 
  "DOGZ", 
  "DLTR", 
  "DLPN", 
  "DLPNW", 
  "DOMO", 
  "DGICA", 
  "DGICB", 
  "DMLP", 
  "DORM", 
  "DOVA", 
  "LYL", 
  "DOTA", 
  "DOTAR", 
  "DOTAU", 
  "DOTAW", 
  "DBX", 
  "DCAR", 
  "DRYS", 
  "DSPG", 
  "DLTH", 
  "DNKN", 
  "DRRX", 
  "DXPE", 
  "DYSL", 
  "DYNT", 
  "DVAX", 
  "ETFC", 
  "SSP", 
  "EBMT", 
  "EGBN", 
  "EGLE", 
  "EFBI", 
  "EGRX", 
  "EWBC", 
  "EACQ", 
  "EACQU", 
  "EACQW", 
  "EML", 
  "EAST", 
  "EASTW", 
  "EVGBC", 
  "EVSTC", 
  "EVFTC", 
  "EVLMC", 
  "OKDCC", 
  "EBAY", 
  "EBAYL", 
  "EBIX", 
  "ELON", 
  "ECHO", 
  "SATS", 
  "EEI", 
  "ESES", 
  "EDAP", 
  "EDGE", 
  "EDGW", 
  "EDIT", 
  "EDUC", 
  "EGAN", 
  "EGLT", 
  "EHTH", 
  "EIDX", 
  "EIGR", 
  "EKSO", 
  "LOCO", 
  "EMITF", 
  "ESLT", 
  "ERI", 
  "ESIO", 
  "ECOR", 
  "EA", 
  "EFII", 
  "ELSE", 
  "ESBK", 
  "ELOX", 
  "ELTK", 
  "EMCI", 
  "EMCF", 
  "EMKR", 
  "EMMS", 
  "NYNY", 
  "ENTA", 
  "ECPG", 
  "WIRE", 
  "ENDP", 
  "ECYT", 
  "ELGX", 
  "NDRA", 
  "NDRAW", 
  "EIGI", 
  "WATT", 
  "EFOI", 
  "ERII", 
  "EGC", 
  "ENG", 
  "ENPH", 
  "ESGR", 
  "ESGRP", 
  "ENFC", 
  "ENTG", 
  "ENTX", 
  "ENTXW", 
  "EBTC", 
  "EFSC", 
  "EPZM", 
  "PLUS", 
  "EQIX", 
  "EQFN", 
  "EQBK", 
  "ERIC", 
  "ERIE", 
  "ERYP", 
  "ESCA", 
  "ESPR", 
  "ESQ", 
  "ESSA", 
  "EPIX", 
  "ESND", 
  "ESTR", 
  "ESTRW", 
  "VBND", 
  "VUSE", 
  "VIDI", 
  "ETSY", 
  "CLWT", 
  "EDRY", 
  "EEFT", 
  "ESEA", 
  "EVLO", 
  "EVBG", 
  "EVK", 
  "EVER", 
  "MRAM", 
  "EVLV", 
  "EVOP", 
  "EVFM", 
  "EVGN", 
  "EVOK", 
  "EOLS", 
  "EVOL", 
  "EXAS", 
  "FLAG", 
  "ROBO", 
  "XELA", 
  "EXEL", 
  "EXFO", 
  "EXLS", 
  "EXPI", 
  "EXPE", 
  "EXPD", 
  "EXPO", 
  "ESRX", 
  "STAY", 
  "XOG", 
  "EXTR", 
  "EYEG", 
  "EYEGW", 
  "EYEN", 
  "EYPT", 
  "EZPW", 
  "FFIV", 
  "FB", 
  "DAVE", 
  "FANH", 
  "FARM", 
  "FMAO", 
  "FFKT", 
  "FMNB", 
  "FAMI", 
  "FARO", 
  "FAST", 
  "FAT", 
  "FATE", 
  "FBSS", 
  "FSAC", 
  "FSACU", 
  "FSACW", 
  "FNHC", 
  "FENC", 
  "GSM", 
  "FFBW", 
  "FCSC", 
  "FGEN", 
  "FDBC", 
  "ONEQ", 
  "LION", 
  "FDUS", 
  "FDUSL", 
  "FRGI", 
  "FITB", 
  "FITBI", 
  "FNGN", 
  "FISI", 
  "FNSR", 
  "FNJN", 
  "FNTE", 
  "FNTEU", 
  "FNTEW", 
  "FEYE", 
  "FBNC", 
  "FNLC", 
  "FRBA", 
  "BUSE", 
  "FBIZ", 
  "FCAP", 
  "FCFS", 
  "FCBP", 
  "FCNCA", 
  "FCBC", 
  "FCCO", 
  "FBNK", 
  "FDEF", 
  "FFBC", 
  "FFBCW", 
  "FFIN", 
  "THFF", 
  "FFNW", 
  "FFWM", 
  "FGBI", 
  "FHB", 
  "INBK", 
  "INBKL", 
  "FIBK", 
  "FRME", 
  "FMBH", 
  "FMBI", 
  "FNWB", 
  "FSFG", 
  "FSLR", 
  "FAAR", 
  "FPA", 
  "BICK", 
  "FBZ", 
  "FTHI", 
  "FCAL", 
  "FCAN", 
  "FTCS", 
  "FCEF", 
  "FCA", 
  "SKYY", 
  "RNDM", 
  "FDT", 
  "FDTS", 
  "FVC", 
  "FV", 
  "IFV", 
  "DWPP", 
  "DALI", 
  "FEM", 
  "RNEM", 
  "FEMB", 
  "FEMS", 
  "FTSM", 
  "FEP", 
  "FEUZ", 
  "FGM", 
  "FTGC", 
  "FTLB", 
  "HYLS", 
  "FHK", 
  "NFTY", 
  "FTAG", 
  "FTRI", 
  "LEGR", 
  "FPXI", 
  "YDIV", 
  "FJP", 
  "FEX", 
  "FTC", 
  "RNLC", 
  "FTA", 
  "FLN", 
  "LMBS", 
  "FMB", 
  "FMK", 
  "FNX", 
  "FNY", 
  "RNMC", 
  "FNK", 
  "FAD", 
  "FAB", 
  "MDIV", 
  "MCEF", 
  "FMHI", 
  "QABA", 
  "ROBT", 
  "FTXO", 
  "QCLN", 
  "GRID", 
  "CIBR", 
  "FTXG", 
  "CARZ", 
  "FTXN", 
  "FTXH", 
  "FTXD", 
  "FTXL", 
  "FONE", 
  "TDIV", 
  "FTXR", 
  "QQEW", 
  "QQXT", 
  "QTEC", 
  "AIRR", 
  "QINC", 
  "RDVY", 
  "RFAP", 
  "RFDI", 
  "RFEM", 
  "RFEU", 
  "FTSL", 
  "FYX", 
  "FYC", 
  "RNSC", 
  "FYT", 
  "SDVY", 
  "FKO", 
  "FCVT", 
  "FDIV", 
  "FSZ", 
  "FIXD", 
  "TUSA", 
  "FKU", 
  "RNDV", 
  "FUNC", 
  "FUSB", 
  "SVVC", 
  "FSV", 
  "FISV", 
  "FIVE", 
  "FPRX", 
  "FVE", 
  "FIVN", 
  "FLEX", 
  "FLKS", 
  "FLXN", 
  "SKOR", 
  "LKOR", 
  "MBSD", 
  "ASET", 
  "ESGG", 
  "ESG", 
  "QLC", 
  "FPAY", 
  "FLXS", 
  "FLIR", 
  "FLNT", 
  "FLDM", 
  "FFIC", 
  "FNCB", 
  "FOMX", 
  "FONR", 
  "FSCT", 
  "FRSX", 
  "FORM", 
  "FORTY", 
  "FORR", 
  "FRTA", 
  "FTNT", 
  "FBIO", 
  "FBIOP", 
  "FTSV", 
  "FWRD", 
  "FORD", 
  "FWP", 
  "FOSL", 
  "FMI", 
  "FOXF", 
  "FRAN", 
  "FELE", 
  "FRED", 
  "RAIL", 
  "FEIM", 
  "FRPT", 
  "FTEO", 
  "FTR", 
  "FRPH", 
  "FSBW", 
  "FSBC", 
  "FTD", 
  "FTEK", 
  "FCEL", 
  "FLGT", 
  "FORK", 
  "FLL", 
  "FULT", 
  "FNKO", 
  "FSNN", 
  "FTFT", 
  "FFHL", 
  "WILC", 
  "GTHX", 
  "FOANC", 
  "GRBIC", 
  "MOGLC", 
  "PETZC", 
  "GAIA", 
  "GLPG", 
  "GALT", 
  "GLMD", 
  "GLPI", 
  "GPIC", 
  "GRMN", 
  "GARS", 
  "GLIBA", 
  "GLIBP", 
  "GDS", 
  "GEMP", 
  "GENC", 
  "GFN", 
  "GFNCP", 
  "GFNSL", 
  "GENE", 
  "GNUS", 
  "GNMK", 
  "GNCA", 
  "GHDX", 
  "GNPX", 
  "GNTX", 
  "THRM", 
  "GEOS", 
  "GABC", 
  "GERN", 
  "GEVO", 
  "ROCK", 
  "GIGM", 
  "GIII", 
  "GILT", 
  "GILD", 
  "GBCI", 
  "GLAD", 
  "GLADN", 
  "GOOD", 
  "GOODM", 
  "GOODO", 
  "GOODP", 
  "GAIN", 
  "GAINM", 
  "GAINN", 
  "GAINO", 
  "LAND", 
  "LANDP", 
  "GLBZ", 
  "GBT", 
  "ENT", 
  "GBLI", 
  "GBLIL", 
  "GBLIZ", 
  "SELF", 
  "GWRS", 
  "DRIV", 
  "KRMA", 
  "FINX", 
  "AIQ", 
  "BFIT", 
  "SNSR", 
  "LNGR", 
  "MILN", 
  "EFAS", 
  "QQQC", 
  "BOTZ", 
  "CATH", 
  "SOCL", 
  "ALTY", 
  "SRET", 
  "YLCO", 
  "GLBS", 
  "GLUU", 
  "GLYC", 
  "GOGO", 
  "GLNG", 
  "GMLP", 
  "GMLPP", 
  "DNJR", 
  "GDEN", 
  "GOGL", 
  "GBDC", 
  "GTIM", 
  "GBLK", 
  "GSHD", 
  "GPRO", 
  "GPAQ", 
  "GPAQU", 
  "GPAQW", 
  "GSHT", 
  "GSHTU", 
  "GSHTW", 
  "GOV", 
  "GOVNI", 
  "LOPE", 
  "GRVY", 
  "GECC", 
  "GECCL", 
  "GECCM", 
  "GEC", 
  "GLDD", 
  "GSBC", 
  "GNBC", 
  "GRBK", 
  "GPP", 
  "GPRE", 
  "GCBC", 
  "GLRE", 
  "GRNQ", 
  "GSKY", 
  "GSUM", 
  "GRIF", 
  "GRFS", 
  "GRIN", 
  "GRPN", 
  "OMAB", 
  "GGAL", 
  "GVP", 
  "GSIT", 
  "GSVC", 
  "GTXI", 
  "GTYH", 
  "GTYHU", 
  "GTYHW", 
  "GBNK", 
  "GNTY", 
  "GFED", 
  "GIFI", 
  "GURE", 
  "GPOR", 
  "GWPH", 
  "GWGH", 
  "GYRO", 
  "HEES", 
  "HLG", 
  "HNRG", 
  "HALL", 
  "HALO", 
  "HBK", 
  "HLNE", 
  "HJLI", 
  "HJLIW", 
  "HWC", 
  "HWCPL", 
  "HAFC", 
  "HQCL", 
  "HONE", 
  "HLIT", 
  "HFGIC", 
  "HBIO", 
  "HCAP", 
  "HCAPZ", 
  "HAS", 
  "HA", 
  "HWKN", 
  "HWBK", 
  "HYAC", 
  "HYACU", 
  "HYACW", 
  "HAYN", 
  "HDS", 
  "HIIQ", 
  "HCSG", 
  "HQY", 
  "HSTM", 
  "HTLD", 
  "HTLF", 
  "HTBX", 
  "HEBT", 
  "HSII", 
  "HELE", 
  "HMNY", 
  "HSDT", 
  "HMTV", 
  "HNNA", 
  "HSIC", 
  "HTBK", 
  "HFWA", 
  "HCCI", 
  "MLHR", 
  "HRTX", 
  "HSKA", 
  "HX", 
  "HIBB", 
  "SNLN", 
  "HPJ", 
  "HIHO", 
  "HIMX", 
  "HIFS", 
  "HSGX", 
  "HCCHU", 
  "HMNF", 
  "HMSY", 
  "HOLI", 
  "HOLX", 
  "HBCP", 
  "HOMB", 
  "HFBL", 
  "HMST", 
  "HMTA", 
  "HTBI", 
  "FIXX", 
  "HOFT", 
  "HOPE", 
  "HFBC", 
  "HBNC", 
  "HZNP", 
  "HRZN", 
  "DAX", 
  "QYLD", 
  "HDP", 
  "HPT", 
  "TWNK", 
  "TWNKW", 
  "HMHC", 
  "HWCC", 
  "HOVNP", 
  "HBMD", 
  "HTGM", 
  "HTHT", 
  "HUBG", 
  "HSON", 
  "HDSN", 
  "HUNT", 
  "HUNTU", 
  "HUNTW", 
  "HBAN", 
  "HBANN", 
  "HBANO", 
  "HURC", 
  "HURN", 
  "HCM", 
  "HBP", 
  "HVBC", 
  "HYGS", 
  "HYRE", 
  "IDSY", 
  "IIIV", 
  "IAC", 
  "IAM", 
  "IAMXR", 
  "IAMXW", 
  "IBKC", 
  "IBKCO", 
  "IBKCP", 
  "ICAD", 
  "IEP", 
  "ICCH", 
  "ICFI", 
  "ICHR", 
  "ICLK", 
  "ICLR", 
  "ICON", 
  "ICUI", 
  "IPWR", 
  "INVE", 
  "IDRA", 
  "IDXX", 
  "IESC", 
  "IROQ", 
  "IFMK", 
  "INFO", 
  "IIVI", 
  "KANG", 
  "IKNX", 
  "ILG", 
  "ILMN", 
  "ISNS", 
  "IMMR", 
  "ICCC", 
  "IMDZ", 
  "IMNP          ", 
  "IMGN", 
  "IMMU", 
  "IMRN", 
  "IMRNW", 
  "IMMP", 
  "IMPV", 
  "PI", 
  "IMMY", 
  "IMV", 
  "INCY", 
  "INDB", 
  "IBCP", 
  "IBTX", 
  "INDU", 
  "INDUU", 
  "INDUW", 
  "ILPT", 
  "IDSA", 
  "INFN", 
  "INFI", 
  "IFRX", 
  "III", 
  "IEA", 
  "IEAWW", 
  "IMKTA", 
  "INWK", 
  "INOD", 
  "IPHS", 
  "IOSP", 
  "INNT", 
  "ISSC", 
  "INVA", 
  "INGN", 
  "INOV", 
  "INO", 
  "INPX", 
  "INSG", 
  "NSIT", 
  "ISIG", 
  "INSM", 
  "INSE", 
  "IIIN", 
  "PODD", 
  "INSY", 
  "NTEC", 
  "IART", 
  "IDTI", 
  "IMTE", 
  "INTC", 
  "NTLA", 
  "IPCI", 
  "IPAR", 
  "IBKR", 
  "ICPT", 
  "IDCC", 
  "TILE", 
  "LINK", 
  "IMI", 
  "INAP", 
  "IBOC", 
  "ISCA", 
  "IGLD", 
  "IIJI", 
  "IDXG", 
  "XENT", 
  "INTX", 
  "IVAC", 
  "INTL", 
  "ITCI", 
  "IIN", 
  "INTU", 
  "ISRG", 
  "PLW", 
  "ADRA", 
  "ADRD", 
  "ADRE", 
  "ADRU", 
  "PKW", 
  "PFM", 
  "PYZ", 
  "PEZ", 
  "PSL", 
  "PIZ", 
  "PIE", 
  "PXI", 
  "PFI", 
  "PTH", 
  "PRN", 
  "DWLV", 
  "PDP", 
  "DWAQ", 
  "DWAS", 
  "DWIN", 
  "DWTR", 
  "PTF", 
  "PUI", 
  "IDLB", 
  "PRFZ", 
  "PAGG", 
  "PSAU", 
  "PIO", 
  "PGJ", 
  "PEY", 
  "IPKW", 
  "PID", 
  "KBWB", 
  "KBWD", 
  "KBWY", 
  "KBWP", 
  "KBWR", 
  "LDRI", 
  "LALT", 
  "PNQI", 
  "PDBC", 
  "QQQ", 
  "USLB", 
  "PSCD", 
  "PSCC", 
  "PSCE", 
  "PSCF", 
  "PSCH", 
  "PSCI", 
  "PSCT", 
  "PSCM", 
  "PSCU", 
  "VRIG", 
  "PHO", 
  "ISTR", 
  "ISBC", 
  "ITIC", 
  "NVIV", 
  "IVTY", 
  "IONS", 
  "IOVA", 
  "IPAS", 
  "IPGP", 
  "IPIC", 
  "CLRG", 
  "CSML", 
  "IQ", 
  "IRMD", 
  "IRTC", 
  "IRIX", 
  "IRDM", 
  "IRDMB", 
  "IRBT", 
  "IRWD", 
  "IRCP", 
  "PMPT", 
  "SLQD", 
  "CSJ", 
  "ISHG", 
  "SHY", 
  "TLT", 
  "IEI", 
  "IEF", 
  "AIA", 
  "COMT", 
  "ISTB", 
  "IXUS", 
  "IUSG", 
  "IUSV", 
  "IUSB", 
  "HEWG", 
  "SUSB", 
  "SUSC", 
  "XT", 
  "FALN", 
  "IFEU", 
  "IFGL", 
  "IGF", 
  "GNMA", 
  "HYXE", 
  "CIU", 
  "IGOV", 
  "EMB", 
  "MBB", 
  "JKI", 
  "ACWX", 
  "ACWI", 
  "AAXJ", 
  "EWZS", 
  "MCHI", 
  "ESGD", 
  "SCZ", 
  "ESGE", 
  "EEMA", 
  "EMXC", 
  "EUFN", 
  "IEUS", 
  "RING", 
  "MPCT", 
  "ENZL", 
  "QAT", 
  "TUR", 
  "UAE", 
  "ESGU", 
  "IBB", 
  "SOXX", 
  "AMCA", 
  "EMIF", 
  "ICLN", 
  "WOOD", 
  "INDY", 
  "IJT", 
  "DVY", 
  "SHV", 
  "CRED", 
  "PFF", 
  "ISRL", 
  "ITI", 
  "ITRM", 
  "ITRI", 
  "ITRN", 
  "ITUS", 
  "IVENC", 
  "IVFGC", 
  "IVFVC", 
  "IZEA", 
  "JJSF", 
  "MAYS", 
  "JBHT", 
  "JCOM", 
  "JKHY", 
  "JACK", 
  "JAGX", 
  "JAKK", 
  "JMBA", 
  "JRVR", 
  "JSML", 
  "JSMD", 
  "JASN", 
  "JASNW", 
  "JAZZ", 
  "JD", 
  "JSYN", 
  "JSYNR", 
  "JSYNU", 
  "JSYNW", 
  "JRSH", 
  "JBLU", 
  "JTPY", 
  "JCTCF", 
  "JMU", 
  "JBSS", 
  "JOUT", 
  "JNCE", 
  "JNP", 
  "KTWO", 
  "KALU", 
  "KALA", 
  "KALV", 
  "KMDA", 
  "KNDI", 
  "KPTI", 
  "KAAC", 
  "KAACU", 
  "KAACW", 
  "KZIA", 
  "KBLM", 
  "KBLMR", 
  "KBLMU", 
  "KBLMW", 
  "KBSF", 
  "KCAP", 
  "KCAPL", 
  "KRNY", 
  "KELYA", 
  "KELYB", 
  "KMPH", 
  "KFFB", 
  "KERX", 
  "KEQU", 
  "KTCC", 
  "KZR", 
  "KFRC", 
  "KE", 
  "KBAL", 
  "KIN", 
  "KGJI", 
  "KINS", 
  "KONE", 
  "KNSA", 
  "KNSL", 
  "KIRK", 
  "KTOV", 
  "KTOVW", 
  "KLAC", 
  "KLXI", 
  "KONA", 
  "KOPN", 
  "KRNT", 
  "KOSS", 
  "KWEB", 
  "KTOS", 
  "KRYS", 
  "KLIC", 
  "KURA", 
  "KVHI", 
  "FSTR", 
  "LJPC", 
  "LSBK", 
  "LBAI", 
  "LKFN", 
  "LAKE", 
  "LRCX", 
  "LAMR", 
  "LANC", 
  "LCA", 
  "LCAHU", 
  "LCAHW", 
  "LNDC", 
  "LARK", 
  "LMRK", 
  "LMRKN", 
  "LMRKO", 
  "LMRKP", 
  "LE", 
  "LSTR", 
  "LNTH", 
  "LTRX", 
  "LSCC", 
  "LAUR", 
  "LAWS", 
  "LAZY", 
  "LCNB", 
  "LBIX", 
  "LPTX", 
  "LGCY", 
  "LGCYO", 
  "LGCYP", 
  "LTXB", 
  "DDBI", 
  "EDBI", 
  "INFR", 
  "LVHD", 
  "SQLV", 
  "UDBI", 
  "LACQ", 
  "LACQU", 
  "LACQW", 
  "LMAT", 
  "TREE", 
  "LEVL", 
  "LXRX", 
  "LX", 
  "LFAC", 
  "LFACU", 
  "LFACW", 
  "LGIH", 
  "LHCG", 
  "LLIT", 
  "LBRDA", 
  "LBRDK", 
  "LEXEA", 
  "LEXEB", 
  "LBTYA", 
  "LBTYB", 
  "LBTYK", 
  "LILA", 
  "LILAK", 
  "BATRA", 
  "BATRK", 
  "FWONA", 
  "FWONK", 
  "LSXMA", 
  "LSXMB", 
  "LSXMK", 
  "TAX", 
  "LTRPA", 
  "LTRPB", 
  "LPNT", 
  "LCUT", 
  "LFVN", 
  "LWAY", 
  "LGND", 
  "LTBR", 
  "LPTH", 
  "LLEX", 
  "LMB", 
  "LLNW", 
  "LMST", 
  "LMNR", 
  "LINC", 
  "LECO", 
  "LIND", 
  "LINDW", 
  "LPCN", 
  "LQDT", 
  "LFUS", 
  "LIVN", 
  "LOB", 
  "LIVE", 
  "LPSN", 
  "LIVX", 
  "LKQ", 
  "LMFA", 
  "LMFAW", 
  "LOGI", 
  "LOGM", 
  "CNCR", 
  "LONE", 
  "LOOP", 
  "LORL", 
  "LOXO", 
  "LPLA", 
  "LRAD", 
  "LYTS", 
  "LULU", 
  "LITE", 
  "LMNX", 
  "LUNA", 
  "LBC", 
  "MBTF", 
  "MACQ", 
  "MACQU", 
  "MACQW", 
  "MCBC", 
  "MFNC", 
  "MTSI", 
  "MGNX", 
  "MDGL", 
  "MAGS", 
  "MGLN", 
  "MGTA", 
  "MGIC", 
  "CALL", 
  "MNGA", 
  "MGYR", 
  "MHLD", 
  "MMYT", 
  "MBUU", 
  "MLVF", 
  "MAMS", 
  "TUSK", 
  "RPIBC", 
  "MANH", 
  "LOAN", 
  "MNTX", 
  "MTEX", 
  "MNKD", 
  "MANT", 
  "MARA", 
  "MCHX", 
  "MRIN", 
  "MARPS", 
  "MRNS", 
  "MKTX", 
  "MRLN", 
  "MAR", 
  "MBII", 
  "MRTN", 
  "MMLP", 
  "MRVL", 
  "MASI", 
  "MTCH", 
  "MTLS", 
  "MPAC", 
  "MPACU", 
  "MPACW", 
  "MTRX", 
  "MAT", 
  "MATR", 
  "MATW", 
  "MXIM", 
  "MXWL", 
  "MZOR", 
  "MBFI", 
  "MBFIO", 
  "MCFT", 
  "MGRC", 
  "MDCA", 
  "MFIN", 
  "MFINL", 
  "MTBC", 
  "MTBCP", 
  "MNOV", 
  "MDSO", 
  "MDGS", 
  "MDWD", 
  "MEDP", 
  "MEIP", 
  "MGTX", 
  "MLCO", 
  "MLNT", 
  "MLNX", 
  "MELR", 
  "MNLO", 
  "MTSL", 
  "MELI", 
  "MBWM", 
  "MERC", 
  "MBIN", 
  "MRCY", 
  "EBSB", 
  "MRBK", 
  "VIVO", 
  "MMSI", 
  "MACK", 
  "MRSN", 
  "MRUS", 
  "MLAB", 
  "MESO", 
  "CASH", 
  "MEOH", 
  "MGEE", 
  "MGPI", 
  "MBOT", 
  "MCHP", 
  "MU", 
  "MSFT", 
  "MSTR", 
  "MVIS", 
  "MICT", 
  "MPB", 
  "MTP", 
  "MCEP", 
  "MBCN", 
  "MSEX", 
  "MSBI", 
  "MSVB", 
  "MOFG", 
  "MIME", 
  "MDXG", 
  "MNDO", 
  "MB", 
  "NERV", 
  "MGEN", 
  "MRTX", 
  "MSON", 
  "MIND", 
  "MINDP", 
  "MITK", 
  "MITL", 
  "MKSI", 
  "MMAC", 
  "MINI", 
  "MOBL", 
  "MMDM", 
  "MMDMR", 
  "MMDMU", 
  "MMDMW", 
  "MOGO", 
  "MTEM", 
  "MBRX", 
  "MNTA", 
  "MOMO", 
  "MKGI", 
  "MCRI", 
  "MDLZ", 
  "MGI", 
  "MDB", 
  "MPWR", 
  "TYPE", 
  "MNRO", 
  "MRCC", 
  "MNST", 
  "MORN", 
  "MOR", 
  "MOSY", 
  "MTFB", 
  "MTFBW", 
  "MPAA", 
  "MOTS", 
  "MPVD", 
  "MOXC", 
  "MSBF", 
  "MTEC", 
  "MTECU", 
  "MTECW", 
  "MTGE", 
  "MTGEP", 
  "MTSC", 
  "MUDS", 
  "MUDSU", 
  "MUDSW", 
  "LABL", 
  "MBIO", 
  "MFSF", 
  "MVBF", 
  "MYSZ", 
  "MYL", 
  "MYND", 
  "MYNDW", 
  "MYOK", 
  "MYOS", 
  "MYRG", 
  "MYGN", 
  "NBRV", 
  "NAKD", 
  "NNDM", 
  "NANO", 
  "NSTG", 
  "NAOV", 
  "NH", 
  "NK", 
  "NSSC", 
  "NDAQ", 
  "NTRA", 
  "NATH", 
  "NAUH", 
  "NKSH", 
  "FIZZ", 
  "NCMI", 
  "NCOM", 
  "NESR", 
  "NESRW", 
  "NGHC", 
  "NGHCN", 
  "NGHCO", 
  "NGHCP", 
  "NGHCZ", 
  "NHLD", 
  "NHLDW", 
  "NATI", 
  "NRC", 
  "NSEC", 
  "EYE", 
  "NWLI", 
  "NAII", 
  "NHTC", 
  "NATR", 
  "BABY", 
  "JSM", 
  "NAVI", 
  "NBTB", 
  "NCSM", 
  "NEBU", 
  "NEBUU", 
  "NEBUW", 
  "NKTR", 
  "NMRD", 
  "NEOG", 
  "NEO", 
  "NTGN", 
  "NEON", 
  "NEOS", 
  "NVCN", 
  "NEPT", 
  "UEPS", 
  "NETE", 
  "NTAP", 
  "NTES", 
  "NFLX", 
  "NTGR", 
  "NLST", 
  "NTCT", 
  "NTWK", 
  "CUR", 
  "NBIX", 
  "NURO", 
  "NUROW", 
  "STIM", 
  "NTRP", 
  "NBEV", 
  "NYMT", 
  "NYMTN", 
  "NYMTO", 
  "NYMTP", 
  "NEWA", 
  "NLNK", 
  "NMRK", 
  "NWS", 
  "NWSA", 
  "NEWT", 
  "NEWTI", 
  "NEWTZ", 
  "NXEO", 
  "NXEOU", 
  "NXEOW", 
  "NXST", 
  "NEXT", 
  "NFEC", 
  "NODK", 
  "EGOV", 
  "NICE", 
  "NICK", 
  "NCBS", 
  "NITE", 
  "NIHD", 
  "LASR", 
  "NMIH", 
  "NNBR", 
  "NDLS", 
  "NDSN", 
  "NSYS", 
  "NBN", 
  "NTIC", 
  "NTRS", 
  "NTRSP", 
  "NFBK", 
  "NRIM", 
  "NWBI", 
  "NWPX", 
  "NCLH", 
  "NWFL", 
  "NVFY", 
  "NVMI", 
  "NOVN", 
  "NOVT", 
  "NVAX", 
  "NVLN", 
  "NVCR", 
  "NVMM", 
  "NVUS", 
  "NUAN", 
  "NCNA", 
  "NTNX", 
  "NTRI", 
  "NUVA", 
  "NVTR", 
  "QQQX", 
  "NVEE", 
  "NVEC", 
  "NVDA", 
  "NXPI", 
  "NXTM", 
  "NXTD", 
  "NXTDW", 
  "NYMX", 
  "OIIM", 
  "OVLY", 
  "OCSL", 
  "OCSLL", 
  "OCSI", 
  "OASM", 
  "OBLN", 
  "OBSV", 
  "OBCI", 
  "OPTT", 
  "ORIG", 
  "OCFC", 
  "OCLR", 
  "OFED", 
  "OCUL", 
  "ODT", 
  "OMEX", 
  "ODP", 
  "OFS", 
  "OFSSL", 
  "OHAI", 
  "OVBC", 
  "OHRP", 
  "OKTA", 
  "ODFL", 
  "OLBK", 
  "ONB", 
  "OPOF", 
  "OSBC", 
  "OSBCP", 
  "OLLI", 
  "ZEUS", 
  "OFLX", 
  "OMER", 
  "OMCL", 
  "ON", 
  "OTIV", 
  "ONS", 
  "ONSIW", 
  "ONCY", 
  "OMED", 
  "ONTX", 
  "ONTXW", 
  "ONCS", 
  "OHGI", 
  "OSS", 
  "OSPN", 
  "OPBK", 
  "OTEX", 
  "OPES", 
  "OPESU", 
  "OPESW", 
  "OPGN", 
  "OPGNW", 
  "OPHT", 
  "OPNT", 
  "OPK", 
  "OBAS", 
  "OCC", 
  "OPRX", 
  "OPHC", 
  "OPTN", 
  "OPB", 
  "ORMP", 
  "OSUR", 
  "ORBC", 
  "ORBK", 
  "ORLY", 
  "ONVO", 
  "ORGS", 
  "SEED", 
  "OBNK", 
  "OESX", 
  "ORIT", 
  "ORRF", 
  "OFIX", 
  "KIDS", 
  "OSIS", 
  "OSPR", 
  "OSPRU", 
  "OSPRW", 
  "OSN", 
  "OTEL", 
  "OTIC", 
  "OTTW", 
  "OTTR", 
  "OVAS", 
  "OSTK", 
  "OVID", 
  "OXBR", 
  "OXBRW", 
  "OXFD", 
  "OXLC", 
  "OXLCM", 
  "OXLCO", 
  "OXSQ", 
  "OXSQL", 
  "PFIN", 
  "PTSI", 
  "PCAR", 
  "VETS", 
  "PACB", 
  "PEIX", 
  "PMBC", 
  "PPBI", 
  "PCRX", 
  "PACW", 
  "PTIE", 
  "PAAS", 
  "PANL", 
  "PZZA", 
  "FRSH", 
  "PRTK", 
  "PCYG", 
  "PKBK", 
  "PRKR", 
  "PKOH", 
  "PTNR", 
  "PBHC", 
  "PATK", 
  "PNBK", 
  "PATI", 
  "PEGI", 
  "PDCO", 
  "PTEN", 
  "PAVM", 
  "PAVMW", 
  "PAVMZ", 
  "PAYX", 
  "PCTY", 
  "PYDS", 
  "PYPL", 
  "PBBI", 
  "CNXN", 
  "PCMI", 
  "PCSB", 
  "PCTI", 
  "PDCE", 
  "PDFS", 
  "PDLI", 
  "PDLB", 
  "PDVW", 
  "SKIS", 
  "PGC", 
  "PEGA", 
  "PENN", 
  "PVAC", 
  "PFLT", 
  "PNNT", 
  "PWOD", 
  "WRLS", 
  "WRLSR", 
  "WRLSU", 
  "WRLSW", 
  "PEBO", 
  "PEBK", 
  "PFIS", 
  "PBCT", 
  "PBCTP", 
  "PUB", 
  "PEP", 
  "PRCP", 
  "PRFT", 
  "PFMT", 
  "PERI", 
  "PESI", 
  "PPIH", 
  "PTX", 
  "PERY", 
  "PGLC", 
  "PETQ", 
  "PETS", 
  "PFSW", 
  "PGTI", 
  "PHII", 
  "PHIIK", 
  "PAHC", 
  "PLAB", 
  "PICO", 
  "PLLL", 
  "PIRS", 
  "PPC", 
  "PME", 
  "PNK", 
  "PNFP", 
  "PPSI", 
  "PXLW", 
  "EAGL", 
  "EAGLU", 
  "EAGLW", 
  "PLYA", 
  "PLXS", 
  "PLUG", 
  "PLBC", 
  "PS", 
  "PSTI", 
  "PLXP", 
  "PBSK", 
  "PNTR", 
  "PCOM", 
  "POLA", 
  "COOL", 
  "POOL", 
  "POPE", 
  "BPOP", 
  "BPOPM", 
  "BPOPN", 
  "PTLA", 
  "PBPB", 
  "PCH", 
  "POWL", 
  "POWI", 
  "PRAA", 
  "PRAH", 
  "PRAN", 
  "PRPO", 
  "AIPT", 
  "PFBC", 
  "PLPC", 
  "PFBI", 
  "PINC", 
  "LENS", 
  "PSDO", 
  "PRGX", 
  "PSMT", 
  "PNRG", 
  "PRMW", 
  "PRIM", 
  "PVAL", 
  "PFG", 
  "BTEC", 
  "PXUS", 
  "GENY", 
  "PSET", 
  "PY", 
  "PMOM", 
  "USMC", 
  "PSC", 
  "PDEX", 
  "IPDN", 
  "PFIE", 
  "PGNX", 
  "PRGS", 
  "PFPT", 
  "PRPH", 
  "PRQR", 
  "EQRR", 
  "BIB", 
  "UBIO", 
  "TQQQ", 
  "ZBIO", 
  "SQQQ", 
  "BIS", 
  "PSEC", 
  "PTGX", 
  "PRTO", 
  "PTI", 
  "PRTA", 
  "PVBC", 
  "PROV", 
  "PBIP", 
  "PMD", 
  "PTC", 
  "PTCT", 
  "PULM", 
  "PLSE", 
  "PBYI", 
  "PACQ", 
  "PACQU", 
  "PACQW", 
  "PCYO", 
  "PRPL", 
  "PRPLW", 
  "PXS", 
  "QADA", 
  "QADB", 
  "QCRH", 
  "QGEN", 
  "QIWI", 
  "QRVO", 
  "QCOM", 
  "QSII", 
  "QBAK", 
  "QLYS", 
  "QTNA", 
  "QTRX", 
  "QTRH", 
  "QRHC", 
  "QUIK", 
  "QDEL", 
  "QNST", 
  "QUMU", 
  "QTNT", 
  "QRTEA", 
  "QRTEB", 
  "RRD", 
  "RCM", 
  "RARX", 
  "RADA", 
  "RDCM", 
  "RSYS", 
  "RDUS", 
  "RDNT", 
  "RDWR", 
  "METC", 
  "RMBS", 
  "RAND", 
  "GOLD", 
  "RNDB", 
  "RPD", 
  "RAVE", 
  "RAVN", 
  "RBB", 
  "ROLL", 
  "RICK", 
  "RCMT", 
  "RDI", 
  "RDIB", 
  "RGSE", 
  "BCNA", 
  "BLCN", 
  "RLM", 
  "RNWK", 
  "RP", 
  "RETA", 
  "RCON", 
  "REPH", 
  "RRGB", 
  "RRR", 
  "RDVT", 
  "RDFN", 
  "RDHL", 
  "REGN", 
  "RGNX", 
  "RGLS", 
  "REIS", 
  "RBNC", 
  "RELV", 
  "MARK", 
  "RNST", 
  "REGI", 
  "ABAC", 
  "RCII", 
  "RGEN", 
  "RBCAA", 
  "FRBK", 
  "REFR", 
  "RSLS", 
  "RESN", 
  "RECN", 
  "HAIR", 
  "TORC", 
  "ROIC", 
  "RETO", 
  "RTRX", 
  "RVNC", 
  "RVEN", 
  "RVLT", 
  "RWLK", 
  "RFIL", 
  "RGCO", 
  "RYTM", 
  "RBBN", 
  "RIBT", 
  "RIBTW", 
  "RELL", 
  "RIGL", 
  "RNET", 
  "RMNI", 
  "RIOT", 
  "REDU", 
  "RTTR", 
  "RVSB", 
  "RLJE", 
  "RMGN", 
  "RCKT", 
  "RMTI", 
  "RCKY", 
  "RMCF", 
  "ROKU", 
  "ROSE", 
  "ROSEU", 
  "ROSEW", 
  "ROST", 
  "RGLD", 
  "RTIX", 
  "RBCN", 
  "RMBL", 
  "RUSHA", 
  "RUSHB", 
  "RUTH", 
  "RXII", 
  "RXIIW", 
  "RYAAY", 
  "STBA", 
  "SANW", 
  "SCAC", 
  "SCACU", 
  "SCACW", 
  "SBRA", 
  "SABR", 
  "SAEX", 
  "SAFT", 
  "SAGE", 
  "SAIA", 
  "SALM", 
  "SAL", 
  "SAFM", 
  "SASR", 
  "SGMO", 
  "SANM", 
  "GCVRZ", 
  "SPNS", 
  "SRPT", 
  "SVRA", 
  "SBFG", 
  "SBFGP", 
  "SBBX", 
  "SBAC", 
  "SCSC", 
  "SMIT", 
  "SCHN", 
  "SRRK", 
  "SCHL", 
  "SGMS", 
  "SCPH", 
  "SCYX", 
  "SEAC", 
  "SBCF", 
  "STX", 
  "SHIP", 
  "SHIPW", 
  "SHLD", 
  "SHLDW", 
  "SHOS", 
  "SPNE", 
  "SGEN", 
  "EYES", 
  "EYESW", 
  "SECO", 
  "SCWX", 
  "SNFCA", 
  "SEIC", 
  "SLCT", 
  "SIR", 
  "SELB", 
  "SIGI", 
  "SLS", 
  "LEDS", 
  "SMTC", 
  "SENEA", 
  "SENEB", 
  "SNES", 
  "SNH", 
  "SNHNI", 
  "SNHNL", 
  "AIHS", 
  "SNMX", 
  "SRTS", 
  "SRTSW", 
  "STNL", 
  "STNLU", 
  "STNLW", 
  "SQBG", 
  "MCRB", 
  "SREV", 
  "SFBS", 
  "SESN", 
  "SSC", 
  "SVBI", 
  "SGBX", 
  "SGOC", 
  "SEII", 
  "SMED", 
  "SHSP", 
  "SHEN", 
  "PIXY", 
  "SHLO", 
  "TYHT", 
  "SHPG", 
  "SCVL", 
  "SHBI", 
  "SSTI", 
  "SFLY", 
  "SIFI", 
  "SIEB", 
  "SNNA", 
  "SIEN", 
  "BSRR", 
  "SRRA", 
  "SWIR", 
  "SIFY", 
  "SIGA", 
  "SIGM", 
  "SGLB", 
  "SGLBW", 
  "SGMA", 
  "SBNY", 
  "SBNYW", 
  "SLGN", 
  "SILC", 
  "SLAB", 
  "SIMO", 
  "SAMG", 
  "SSNT", 
  "SFNC", 
  "SLP", 
  "SINA", 
  "SBGI", 
  "SINO", 
  "SVA", 
  "SIRI", 
  "SITO", 
  "SKYS", 
  "SKYW", 
  "SWKS", 
  "SNBR", 
  "SLM", 
  "SLMBP", 
  "SGH", 
  "SND", 
  "SMBK", 
  "SMSI", 
  "SMTX", 
  "SRAX", 
  "SCKT", 
  "SODA", 
  "SOHU", 
  "SLRC", 
  "SUNS", 
  "SEDG", 
  "SLNO", 
  "SLNOW", 
  "SLGL", 
  "SLDB", 
  "SNGX", 
  "SNGXW", 
  "SONC", 
  "SOFO", 
  "SNOA", 
  "SNOAW", 
  "SPHS", 
  "SORL", 
  "SRNE", 
  "SOHO", 
  "SOHOB", 
  "SOHOO", 
  "SOHOK", 
  "SFBC", 
  "SSB", 
  "SFST", 
  "SMBC", 
  "SONA", 
  "SBSI", 
  "SP", 
  "SGRP", 
  "SPKE", 
  "SPKEP", 
  "ONCE", 
  "SPAR", 
  "SPTN", 
  "DWFI", 
  "SPPI", 
  "SPRO", 
  "ANY", 
  "SPEX", 
  "SPI", 
  "SAVE", 
  "STXB", 
  "SPLK", 
  "SPOK", 
  "SPWH", 
  "SBPH", 
  "FUND", 
  "SFM", 
  "SPSC", 
  "SSNC", 
  "SSLJ", 
  "SSRM", 
  "STAA", 
  "STAF", 
  "STMP", 
  "STND", 
  "SBLK", 
  "SBLKZ", 
  "SBUX", 
  "STFC", 
  "STBZ", 
  "STDY", 
  "GASS", 
  "STCN", 
  "STLD", 
  "SMRT", 
  "STLR", 
  "STLRU", 
  "STLRW", 
  "SBOT", 
  "STML", 
  "SRCL", 
  "SRCLP", 
  "SBT", 
  "STRL", 
  "SHOO", 
  "SSFN", 
  "SFIX", 
  "SYBT", 
  "BANX", 
  "SSKN", 
  "SSYS", 
  "HNDL", 
  "STRT", 
  "STRS", 
  "STRA", 
  "STRM", 
  "SBBP", 
  "SUMR", 
  "SMMF", 
  "SSBI", 
  "SMMT", 
  "SNHY", 
  "SNDE", 
  "SNSS", 
  "STKL", 
  "SPWR", 
  "RUN", 
  "SUNW", 
  "SMCI", 
  "SPCB", 
  "SCON", 
  "SGC", 
  "SUPN", 
  "SPRT", 
  "SURF", 
  "SGRY", 
  "SRDX", 
  "SIVB", 
  "SYKE", 
  "SYMC", 
  "SYNC", 
  "SYNL", 
  "SYNA", 
  "SNDX", 
  "SYNH", 
  "SGYP", 
  "SYBX", 
  "SNPS", 
  "SYNT", 
  "SES", 
  "SYPR", 
  "SYRS", 
  "TROW", 
  "TTOO", 
  "TRHC", 
  "TCMD", 
  "TAIT", 
  "TTWO", 
  "TLND", 
  "TNDM", 
  "TLF", 
  "TANH", 
  "TAOP", 
  "TPIV", 
  "TEDU", 
  "TATT", 
  "TAYD", 
  "CGBD", 
  "TCPC", 
  "AMTD", 
  "PETZ", 
  "TECD", 
  "TCCO", 
  "TTGT", 
  "TGLS", 
  "TGEN", 
  "TNAV", 
  "TLGT", 
  "TELL", 
  "TENX", 
  "TERP", 
  "TBNK", 
  "TSRO", 
  "TSLA", 
  "TESS", 
  "TTEK", 
  "TTPH", 
  "TCBI", 
  "TCBIL", 
  "TCBIP", 
  "TCBIW", 
  "TXN", 
  "TXRH", 
  "TFSL", 
  "TGTX", 
  "ANDE", 
  "TBBK", 
  "BPRN", 
  "CG", 
  "TCGP", 
  "CAKE", 
  "CHEF", 
  "TCFC", 
  "DSGX", 
  "DXYN", 
  "ENSG", 
  "XONE", 
  "FBMS", 
  "FLIC", 
  "GT", 
  "HABT", 
  "HCKT", 
  "HAIN", 
  "CUBA", 
  "INTG", 
  "JYNT", 
  "KEYW", 
  "KHC", 
  "OLD", 
  "LOVE", 
  "MSG", 
  "MDCO", 
  "MEET", 
  "MIK", 
  "MIDD", 
  "NAVG", 
  "SLIM", 
  "STKS", 
  "ORG", 
  "PRSC", 
  "RMR", 
  "SMPL", 
  "SMPLW", 
  "TSG", 
  "TTD", 
  "ULTI", 
  "YORW", 
  "NCTY", 
  "TXMD", 
  "TRPX", 
  "TBPH", 
  "TST", 
  "TCRD", 
  "TBRGU", 
  "TIBR", 
  "TIBRU", 
  "TIBRW", 
  "TIG", 
  "TTS", 
  "TSBK", 
  "TIPT", 
  "TITN", 
  "TMDI", 
  "TTNP", 
  "TVTY", 
  "TIVO", 
  "TMUS", 
  "TMSR", 
  "TOCA", 
  "TNXP", 
  "TISA", 
  "TOPS", 
  "TRCH", 
  "TRMD", 
  "TSEM", 
  "CLUB", 
  "TOWN", 
  "TPIC", 
  "TCON", 
  "TSCO", 
  "TWMC", 
  "TACT", 
  "TRNS", 
  "TGA", 
  "TBIO", 
  "TA", 
  "TANNI", 
  "TANNL", 
  "TANNZ", 
  "TZOO", 
  "TRMT", 
  "TRVN", 
  "TCDA", 
  "TCBK", 
  "TDAC", 
  "TDACU", 
  "TDACW", 
  "TRIL", 
  "TRS", 
  "TRMB", 
  "TRIB", 
  "TMCX", 
  "TMCXU", 
  "TMCXW", 
  "TRIP", 
  "TSC", 
  "TSCAP", 
  "TBK", 
  "TRVG", 
  "TRNC", 
  "TROV", 
  "TRUE", 
  "THST", 
  "TRUP", 
  "TRST", 
  "TRMK", 
  "TSRI", 
  "TTEC", 
  "TTMI", 
  "TCX", 
  "TUES", 
  "TOUR", 
  "HEAR", 
  "TWLV", 
  "TWLVR", 
  "TWLVU", 
  "TWLVW", 
  "FOX", 
  "FOXA", 
  "TWIN", 
  "TRCB", 
  "TYME", 
  "USCR", 
  "PRTS", 
  "USEG", 
  "GROW", 
  "USAU", 
  "UBNT", 
  "UFPT", 
  "ULTA", 
  "UCTT", 
  "UPL", 
  "RARE", 
  "ULBI", 
  "UMBF", 
  "UMPQ", 
  "UNAM", 
  "UBSH", 
  "UNB", 
  "QURE", 
  "UBCP", 
  "UBOH", 
  "UBSI", 
  "UCBA", 
  "UCBI", 
  "UCFC", 
  "UBNK", 
  "UFCS", 
  "UIHC", 
  "UNFI", 
  "UBFO", 
  "USLM", 
  "UTHR", 
  "UG", 
  "UNIT", 
  "UNTY", 
  "UBX", 
  "OLED", 
  "UEIC", 
  "UFPI", 
  "ULH", 
  "USAP", 
  "UVSP", 
  "UMRX", 
  "UPLD", 
  "UONE", 
  "UONEK", 
  "URBN", 
  "URGN", 
  "ECOL", 
  "USAT", 
  "USATP", 
  "USAK", 
  "UTMD", 
  "UTSI", 
  "UXIN", 
  "VLRX", 
  "VALX", 
  "VALU", 
  "VNDA", 
  "BBH", 
  "GNRX", 
  "PPH", 
  "VWOB", 
  "VNQI", 
  "VCIT", 
  "VGIT", 
  "VIGI", 
  "VYMI", 
  "VCLT", 
  "VGLT", 
  "VMBS", 
  "VONE", 
  "VONG", 
  "VONV", 
  "VTWO", 
  "VTWG", 
  "VTWV", 
  "VTHR", 
  "VCSH", 
  "VTIP", 
  "VGSH", 
  "VTC", 
  "BNDX", 
  "VXUS", 
  "VEAC", 
  "VEACU", 
  "VEACW", 
  "VREX", 
  "VRNS", 
  "VBLT", 
  "VXRT", 
  "VBIV", 
  "VTIQ", 
  "VTIQU", 
  "VTIQW", 
  "VECO", 
  "VEON", 
  "VRA", 
  "VCYT", 
  "VSTM", 
  "VCEL", 
  "VRNT", 
  "VRSN", 
  "VRSK", 
  "VBTX", 
  "VERI", 
  "VRML", 
  "VRNA", 
  "VRCA", 
  "VSAR", 
  "VTNR", 
  "VRTX", 
  "VERU", 
  "VIA", 
  "VIAB", 
  "VSAT", 
  "VIAV", 
  "VICL", 
  "VICR", 
  "VCTR", 
  "CIZ", 
  "VSDA", 
  "CEY", 
  "CEZ", 
  "CID", 
  "CIL", 
  "CFO", 
  "CFA", 
  "CSF", 
  "CDC", 
  "CDL", 
  "VSMV", 
  "CSB", 
  "CSA", 
  "VRAY", 
  "VKTX", 
  "VKTXW", 
  "VBFC", 
  "VLGEA", 
  "VNOM", 
  "VIRC", 
  "VTSI", 
  "VIRT", 
  "VRTS", 
  "VRTSP", 
  "BBC", 
  "BBP", 
  "VRTU", 
  "VTGN", 
  "VC", 
  "VTL", 
  "VIVE", 
  "VVPR", 
  "VVUS", 
  "VOD", 
  "VOXX", 
  "VYGR", 
  "VSEC", 
  "VTVT", 
  "VUZI", 
  "WBA", 
  "WAFD", 
  "WAFDW", 
  "WASH", 
  "WSBF", 
  "WVE", 
  "WSTG", 
  "WCFB", 
  "WDFC", 
  "WEB", 
  "WB", 
  "WEBK", 
  "WEN", 
  "WERN", 
  "WSBC", 
  "WTBA", 
  "WABC", 
  "WSTL", 
  "WDC", 
  "WNEB", 
  "WPRT", 
  "WWR", 
  "WEYS", 
  "WHLR", 
  "WHLRD", 
  "WHLRP", 
  "WHLRW", 
  "WHF", 
  "WHFBL", 
  "WHLM", 
  "WVVI", 
  "WVVIP", 
  "WLDN", 
  "WLFC", 
  "WLTW", 
  "WSC", 
  "WIN", 
  "WING", 
  "WINA", 
  "WINS", 
  "WTFC", 
  "WTFCM", 
  "WTFCW", 
  "AGND", 
  "CXSE", 
  "EMCG", 
  "EMCB", 
  "DGRE", 
  "DXGE", 
  "HYZD", 
  "AGZD", 
  "WETF", 
  "DXJS", 
  "GULF", 
  "HYND", 
  "DGRW", 
  "DGRS", 
  "WIX", 
  "WMIH", 
  "WWD", 
  "WDAY", 
  "WKHS", 
  "WRLD", 
  "WMGI", 
  "WMGIZ", 
  "WSFS", 
  "WSCI", 
  "WVFC", 
  "WYNN", 
  "XBIT", 
  "XELB", 
  "XEL", 
  "XCRA", 
  "XNCR", 
  "XBIO", 
  "XENE", 
  "XERS", 
  "XGTI", 
  "XGTIW", 
  "XLNX", 
  "XOMA", 
  "XPER", 
  "XPLR", 
  "XSPA", 
  "XSPL", 
  "XTLB", 
  "XNET", 
  "YNDX", 
  "YRIV", 
  "YTRA", 
  "YTEN", 
  "YIN", 
  "YOGA", 
  "YGYI", 
  "YRCW", 
  "YECO", 
  "YY", 
  "ZFGN", 
  "ZAGG", 
  "ZLAB", 
  "ZEAL", 
  "ZBRA", 
  "Z", 
  "ZG", 
  "ZN", 
  "ZNWAA", 
  "ZION", 
  "ZIONW", 
  "ZIONZ", 
  "ZIOP", 
  "ZIXI", 
  "ZKIN", 
  "ZGNX", 
  "ZSAN", 
  "ZS", 
  "ZUMZ", 
  "ZYNE", 
  "ZNGA"
  ]
  
module.exports = stockTickers
