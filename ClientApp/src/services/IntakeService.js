import axios from "axios";

class IntakeService
{
    submitroster(data, self)
    {
        let formData = new FormData();
        formData.append("RosterId", data.RosterId);
        formData.append("RosterRefId", data.AppRosterInfoId);
        formData.append("DelOrNonDel", data.DelOrNonDel);
        formData.append("GroupNameLkup", data.GroupNameLkup);
        formData.append("GroupName", data.GroupName);
        formData.append("RosterWorkLevel", data.RosterWorkLevel);
        formData.append("DelegateCode", data.DelegateCode);
        formData.append("EmptorisDocId", data.EmptorisDocId);
        formData.append("IsDliuptodate", data.IsDliuptodate);
        formData.append("DlirevisedDate", data.DlirevisedDate);
        formData.append("RegionLkup", data.RegionLkup);
        formData.append("StateLkup", data.StateLkup);
        formData.append("IsgroupTiedToEntityLkup", data.IsgroupTiedToEntityLkup);
        formData.append("GroupTypeLkUp", data.GroupTypeLkUp);
        formData.append("TeamResponisbleForRosterQuestLkup", data.TeamResponisbleForRosterQuestLkup);
        formData.append("UserResponisbleForRoster", data.UserResponisbleForRoster);
        formData.append("RosterStatusLkUp", data.RosterStatusLkUp);
        formData.append("RosterTypeLkup", data.RosterTypeLkup);
        formData.append("NoOfTins", data.NoOfTins);
        formData.append("NoOfNpis", data.NoOfNpis);
        formData.append("IstinsListedInRosterLkup", data.IstinsListedInRosterLkup);
        formData.append("ShouldRosterProcessLkup", data.ShouldRosterProcessLkup);
        formData.append("RosterProceessComments", data.RosterProceessComments);
        formData.append("IsCanceledLkup", data.IsCanceledLkup);
        formData.append("SearchRosterId", data.SearchRosterId);
        formData.append("IsPend", false);
        formData.append("UrgencyLkup", data.UrgencyLkup);
        formData.append("DelegateId", data.DelegateId);//data.StateLkupArry.join
        formData.append("IsPlmiRosterSubmitted", data.IsPlmiRosterSubmitted);
        formData.append("IsThereaPlminonDel", data.IsThereaPlminonDel);
        formData.append("RosterSource", data.RosterSource);
        formData.append("IsThisGroupNrmmlkup", data.IsThisGroupNrmmlkup);
        formData.append("RosterRecivedDate", data.RosterRecivedDate);
        formData.append("CAQHGroupId", data.CAQHGroupId);
        formData.append("SourceSystenRefernceId", data.SourceSystenRefernceId);
        formData.append("GroupNameNonDel", data.GroupNameNonDel);
        return axios.post(self.$baseapiurl + "RosterUpload/IntakeSubmitRoster", formData).then(function (response)
          {
              return response.data
          }).catch(function (error){console.log(error);});
    }
    pendroster(data, self)
    {
        console.log(data.StateLkupArry);
        let formData1 = new FormData();
        formData1.append("RosterId", data.RosterId);
        formData1.append("RosterRefId", data.AppRosterInfoId);
        formData1.append("DelOrNonDel", data.DelOrNonDel);
        formData1.append("GroupNameLkup", data.GroupNameLkup);
        formData1.append("GroupName", data.GroupName);
        formData1.append("RosterWorkLevel", data.RosterWorkLevel);
        formData1.append("DelegateCode", data.DelegateCode);
        formData1.append("EmptorisDocId", data.EmptorisDocId);
        formData1.append("IsDliuptodate", data.IsDliuptodate);
        formData1.append("DlirevisedDate", data.DlirevisedDate);
        formData1.append("RegionLkup", data.RegionLkup);
        formData1.append("StateLkup", data.StateLkup);
        formData1.append("IsgroupTiedToEntityLkup", data.IsgroupTiedToEntityLkup);
        formData1.append("GroupTypeLkUp", data.GroupTypeLkUp);
        formData1.append("TeamResponisbleForRosterQuestLkup", data.TeamResponisbleForRosterQuestLkup);
        formData1.append("UserResponisbleForRoster", data.UserResponisbleForRoster);
        formData1.append("RosterStatusLkUp", data.RosterStatusLkUp);
        formData1.append("RosterTypeLkup", data.RosterTypeLkup);
        formData1.append("NoOfTins", data.NoOfTins);
        formData1.append("NoOfNpis", data.NoOfNpis);
        formData1.append("IstinsListedInRosterLkup", data.IstinsListedInRosterLkup);
        formData1.append("ShouldRosterProcessLkup", data.ShouldRosterProcessLkup);
        formData1.append("RosterProceessComments", data.RosterProceessComments);
        formData1.append("IsCanceledLkup", data.IsCanceledLkup);
        formData1.append("SearchRosterId", data.SearchRosterId);
        formData1.append("IsPend", true);
        formData1.append("UrgencyLkup", data.UrgencyLkup);
        formData1.append("DelegateId", data.DelegateId);
        formData1.append("IsPlmiRosterSubmitted", data.IsPlmiRosterSubmitted);
        formData1.append("IsThereaPlminonDel", data.IsThereaPlminonDel);
        formData1.append("RosterSource", data.RosterSource);
        formData1.append("IsThisGroupNrmmlkup", data.IsThisGroupNrmmlkup);
        formData1.append("RosterRecivedDate", data.RosterRecivedDate);
        formData1.append("CAQHGroupId", data.CAQHGroupId);
        formData1.append("SourceSystenRefernceId", data.SourceSystenRefernceId);
        formData1.append("GroupNameNonDel", data.GroupNameNonDel);
        return axios.post(self.$baseapiurl + "RosterUpload/IntakePendRoster", formData1).then(function (response)
          {
              return response.data
          }).catch(function (error){console.log(error);});
    }
    getnewrosternumber(self)
    {
        return axios.get(self.$baseapiurl + "RosterUpload/IntakeGetNewRoster").then(function (response)
          {
              return response.data
          }).catch(function (error){console.log(error);});
    }
}
export default new IntakeService();