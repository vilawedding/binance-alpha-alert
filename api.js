import axios from 'axios';

// Fetch airdrop configs
export async function fetchAirdropConfigs() {
  const data = JSON.stringify({ page: 1, rows: 6 });
  try {
    const response = await axios.post(
      'https://www.binance.com/bapi/defi/v1/friendly/wallet-direct/buw/growth/query-alpha-airdrop',
      data,
      {
        headers: { 
          'accept': '*/*', 
          'accept-language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5,be;q=0.4,ja;q=0.3', 
          'bnc-level': '0', 
          'bnc-location': '', 
          'bnc-time-zone': 'Asia/Saigon', 
          'bnc-uuid': '939ef620-f9b3-4931-9edc-f0738c1be68b', 
          'clienttype': 'web', 
          'content-type': 'application/json', 
          'csrftoken': 'c2d16b3c6fd7b7cc8d0a6af0724f07ce', 
          'device-info': 'eyJzY3JlZW5fcmVzb2x1dGlvbiI6IjkwMCwxNDQwIiwiYXZhaWxhYmxlX3NjcmVlbl9yZXNvbHV0aW9uIjoiOTAwLDE0NDAiLCJzeXN0ZW1fdmVyc2lvbiI6Ik1hYyBPUyAxMC4xNS43IiwiYnJhbmRfbW9kZWwiOiJ1bmtub3duIiwic3lzdGVtX2xhbmciOiJ2aS1WTiIsInRpbWV6b25lIjoiR01UKzA3OjAwIiwidGltZXpvbmVPZmZzZXQiOi00MjAsInVzZXJfYWdlbnQiOiJNb3ppbGxhLzUuMCAoTWFjaW50b3NoOyBJbnRlbCBNYWMgT1MgWCAxMF8xNV83KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTM4LjAuMC4wIFNhZmFyaS81MzcuMzYiLCJsaXN0X3BsdWdpbiI6IlBERiBWaWV3ZXIsQ2hyb21lIFBERiBWaWV3ZXIsQ2hyb21pdW0gUERGIFZpZXdlcixNaWNyb3NvZnQgRWRnZSBQREYgVmlld2VyLFdlYktpdCBidWlsdC1pbiBQREYsU2hvY2t3YXZlIEZsYXNoLFJ1ZmZsZSBFeHRlbnNpb24iLCJjYW52YXNfY29kZSI6IjdhYjQ1ZmUxIiwid2ViZ2xfdmVuZG9yIjoiR29vZ2xlIEluYy4gKEFwcGxlKSIsIndlYmdsX3JlbmRlcmVyIjoiQU5HTEUgKEFwcGxlLCBBTkdMRSBNZXRhbCBSZW5kZXJlcjogQXBwbGUgTTEsIFVuc3BlY2lmaWVkIFZlcnNpb24pIiwiYXVkaW8iOiIxMjQuMDQzNDgxNTU4NzY1MDUiLCJwbGF0Zm9ybSI6Ik1hY0ludGVsIiwid2ViX3RpbWV6b25lIjoiQXNpYS9TYWlnb24iLCJkZXZpY2VfbmFtZSI6IkNocm9tZSBWMTM4LjAuMC4wIChNYWMgT1MpIiwiZmluZ2VycHJpbnQiOiI3NWQ3NGE1NDg2ZGQwYjE0NWIxZGMyMjgwNzM1YjYxMyIsImRldmljZV9pZCI6IiIsInJlbGF0ZWRfZGV2aWNlX2lkcyI6IjE2NTc3NzM0Nzg4NDRNbHlWRFNLNFZJVFZoRExiamFMLDE2ODEyNjk1OTcwNzg4M2g3WU85c3hxWlRmZWtkT01YLDE2Nzc1Nzg4ODI3OTdacW11bVZ0UElsdTd1RVVmbWNGIn0=', 
          'fvideo-id': '33df9d1e6929affc9cc484f1d1c20004155f5074', 
          'fvideo-token': 'rRnLaqPo/cBvFODdNr1xww+YGd2r9QeFLeidaFs9ez9geveE9mprTsil0jGqEKyd1sBDr9aG/MYqAq1MfjnCo/QCLdsPsdlt9EVxc0+cJCrqlnrBfVJKE2paXhIAnMQ5ulpcK3mCxjjQhl5vk0LeybFrK9rSU4BW13fJICoqcX8HQhgBfbM8u+E0aL2+uiQpA=68', 
          'lang': 'en', 
          'origin': 'https://www.binance.com', 
          'priority': 'u=1, i', 
          'referer': 'https://www.binance.com/en/alpha-point', 
          'sec-fetch-dest': 'empty', 
          'sec-fetch-mode': 'cors', 
          'sec-fetch-site': 'same-origin', 
          'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1', 
          'x-passthrough-token': '', 
          'x-trace-id': '3d58a03b-08b3-47ac-8706-1692c915ffdb', 
          'x-ui-request-trace': '3d58a03b-08b3-47ac-8706-1692c915ffdb', 
          'Cookie': 'BNC_FV_KEY=33df9d1e6929affc9cc484f1d1c20004155f5074; changeBasisTimeZone=; source=telegram; campaign=app_square_share_link; theme=dark; futures-layout=pro; __BNC_USER_DEVICE_ID__={"cfa935c16070c53bf8e3c24995f9ca0d":{"date":1657773478834,"value":"1657773478844MlyVDSK4VITVhDLbjaL"},"1191febe4b777cc9fba3ecbdc7af15c5":{"date":1681269597248,"value":"168126959707883h7YO9sxqZTfekdOMX"},"956ec6fb865d255af8b938d109e56f25":{"date":1677578882810,"value":"1677578882797ZqmumVtPIlu7uEUfmcF"},"d41d8cd98f00b204e9800998ecf8427e":{"date":1728351981666,"value":""}}; OptanonAlertBoxClosed=2025-02-28T02:51:57.054Z; fiat-prefer-currency=AED; _gcl_au=1.1.233063916.1749873303; bnc-uuid=939ef620-f9b3-4931-9edc-f0738c1be68b; _uetvid=0624f0f0bbcb11ec92db1d6f0b25f816; language=en; userPreferredCurrency=USD_USD; se_gd=ARSARUgIHELV1RToNEw0gZZVgDVUQBVVloPJQWkN1BXVQB1NWVRU1; se_gsd=XSwmXCBjIS43BisrIzY2IzE2DQEUAwoHWVlEVVFaVlBRElNT1; lang=en; language=en; neo-theme=dark; _gid=GA1.2.1959301905.1752413217; aws-waf-token=54f88a70-c77d-4b8a-90f4-299048b561e1:BgoAlzNY6ysbAAAA:AV0cfqkx4hxtL4hU0IvMmbRJgFBre0g+Cj45jsZJAZXLtgDsmWl/l4b4JjRk4nqAiG4wP3zGY25Ye10MA5O+hNFREvnm8sslgD4GxFFfz/xzC+pz17Qq8FAoRn1vFWm9bdxftCNtP3PlNolDO3RB//oZl2kEf1RyKrEPBbuZVppI1DE51U4JoC9Ti0mXCuTzQF8=; se_sd=ggUCxBAwbHXEFZWcWURhgZZUFBRBWEYUloK9eW091NQWgBFNWVMT1; bu_s=new_share; ref=GFELBOF3; BNC_FV_KEY_T=101-wRZl4wartpn6rPitq5lgSa3RYmWa8fk2%2Bv2za0FZMpgXFoyMer065ItZ0Xr9kiRcBzwK01H44nxFsvt5t%2BKf6Q%3D%3D-wZADbFPrnP%2BytXVpDU9EyQ%3D%3D-85; BNC_FV_KEY_EXPIRE=1752735575664; r20t=web.BC373F33F6F9B7CCD6D859C8C12A61E2; r30t=1; cr00=46C59BCEE1C26F18B55C0D18D87811B7; d1og=web.1132553116.10E9BC3598F75F36CA139ADAC50DE672; r2o1=web.1132553116.544637A4378E89B1D975D0F1D4AEE7FC; f30l=web.1132553116.2E862740632FBD864331F2335C1035EE; BNC-Location=; currentAccount=; p20t=web.1132553116.4C1A9E4231003AB354C3C0DE693D5D11; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%221132553116%22%2C%22first_id%22%3A%2218774cf3cc4113e-098c656aaf295e-1e525634-1296000-18774cf3cc51eb9%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E8%87%AA%E7%84%B6%E6%90%9C%E7%B4%A2%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%2C%22%24latest_referrer%22%3A%22https%3A%2F%2Fwww.google.com%2F%22%2C%22%24latest_utm_source%22%3A%22telegram%22%2C%22%24latest_utm_campaign%22%3A%22moonbix_dogsnot%22%2C%22%24latest_utm_medium%22%3A%22social%22%2C%22%24latest_utm_content%22%3A%22G8HlKbHR_tckSedx14u76A%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTg3NzRjZjNjYzQxMTNlLTA5OGM2NTZhYWYyOTVlLTFlNTI1NjM0LTEyOTYwMDAtMTg3NzRjZjNjYzUxZWI5IiwiJGlkZW50aXR5X2xvZ2luX2lkIjoiMTEzMjU1MzExNiJ9%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%24identity_login_id%22%2C%22value%22%3A%221132553116%22%7D%2C%22%24device_id%22%3A%2218774cf3cc4113e-098c656aaf295e-1e525634-1296000-18774cf3cc51eb9%22%7D; _gac_UA-162512367-1=1.1752713990.Cj0KCQjwm93DBhD_ARIsADR_DjG76fWESNsL0v08qbw5ABa511CBDQ_OyukKBYDo9MFc8AlL-2exXIYaAsukEALw_wcB; _gcl_aw=GCL.1752713990.Cj0KCQjwm93DBhD_ARIsADR_DjG76fWESNsL0v08qbw5ABa511CBDQ_OyukKBYDo9MFc8AlL-2exXIYaAsukEALw_wcB; _gcl_gs=2.1.k1$i1752713985$u110716949; _gat_UA-162512367-1=1; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Jul+17+2025+08%3A01%3A53+GMT%2B0700+(Indochina+Time)&version=202506.1.0&geolocation=SG%3B&isIABGlobal=false&hosts=&consentId=99f5eba4-e637-4dd0-b5ad-b2ea506ca0a3&interactionCount=4&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0004%3A1%2CC0002%3A1&AwaitingReconsent=false&browserGpcFlag=0&isAnonUser=1&intType=1; _ga=GA1.1.1501144053.1681291948; _ga_3WP50LGEEC=GS2.1.s1752713973$o1001$g1$t1752714122$j21$l0$h0'
        },
        maxBodyLength: Infinity 
      }
    );

    return response.data?.data?.configs || [];
  } catch (error) {
    console.error(`[${account.name}] Fetch configs error:`, error.message);
    return [];
  }
}
