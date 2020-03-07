class IClientUser
{
public:
    virtual unknown_ret GetHSteamUser() = 0;
    virtual unknown_ret LogOn(CSteamID) = 0;
    virtual unknown_ret LogOnWithPassword(char const*, char const*) = 0;
    virtual unknown_ret LogOnAndCreateNewSteamAccountIfNeeded() = 0;
    virtual unknown_ret VerifyOfflineLogon() = 0;
    virtual unknown_ret LogOff() = 0;
    virtual unknown_ret BLoggedOn() = 0;
    virtual unknown_ret GetLogonState() = 0;
    virtual unknown_ret BConnected() = 0;
    virtual unknown_ret BTryingToLogin() = 0;
    virtual unknown_ret GetSteamID() = 0;
    virtual unknown_ret GetConsoleSteamID() = 0;
    virtual unknown_ret GetClientInstanceID() = 0;
    virtual unknown_ret IsVACBanned(unsigned int) = 0;
    virtual unknown_ret SetEmail(char const*) = 0;
    virtual unknown_ret SetConfigString(EConfigSubTree, char const*, char const*) = 0;
    virtual unknown_ret GetConfigString(EConfigSubTree, char const*, char*, int) = 0;
    virtual unknown_ret SetConfigInt(EConfigSubTree, char const*, int) = 0;
    virtual unknown_ret GetConfigInt(EConfigSubTree, char const*, int*) = 0;
    virtual unknown_ret DeleteConfigKey(EConfigSubTree, char const*) = 0;
    virtual unknown_ret GetConfigStoreKeyName(EConfigSubTree, char const*, char*, int) = 0;
    virtual unknown_ret InitiateGameConnection(void*, int, CSteamID, CGameID, unsigned int, unsigned short, bool) = 0;
    virtual unknown_ret InitiateGameConnectionOld(void*, int, CSteamID, CGameID, unsigned int, unsigned short, bool, void*, int) = 0;
    virtual unknown_ret TerminateGameConnection(unsigned int, unsigned short) = 0;
    virtual unknown_ret SignalAppsToShutDown(CGameID) = 0;
    virtual unknown_ret TerminateAppMultiStep(CGameID, unsigned int) = 0;
    virtual unknown_ret SetSelfAsChatDestination(bool) = 0;
    virtual unknown_ret IsPrimaryChatDestination() = 0;
    virtual unknown_ret RequestLegacyCDKey(unsigned int) = 0;
    virtual unknown_ret AckGuestPass(char const*) = 0;
    virtual unknown_ret RedeemGuestPass(char const*) = 0;
    virtual unknown_ret GetGuestPassToGiveCount() = 0;
    virtual unknown_ret GetGuestPassToRedeemCount() = 0;
    virtual unknown_ret GetGuestPassToGiveInfo(unsigned int, unsigned long long*, unsigned int*, unsigned int*, unsigned int*, unsigned int*, unsigned int*, char*, int) = 0;
    virtual unknown_ret GetGuestPassToGiveOut(unsigned int) = 0;
    virtual unknown_ret GetGuestPassToRedeem(unsigned int) = 0;
    virtual unknown_ret GetGuestPassToRedeemInfo(unsigned int, unsigned long long*, unsigned int*, unsigned int*, unsigned int*, unsigned int*, unsigned int*) = 0;
    virtual unknown_ret GetGuestPassToRedeemSenderName(unsigned int, char*, int) = 0;
    virtual unknown_ret GetNumAppsInGuestPassesToRedeem() = 0;
    virtual unknown_ret GetAppsInGuestPassesToRedeem(unsigned int*, unsigned int) = 0;
    virtual unknown_ret GetCountUserNotifications() = 0;
    virtual unknown_ret GetCountUserNotification(EUserNotification) = 0;
    virtual unknown_ret RequestStoreAuthURL(char const*) = 0;
    virtual unknown_ret SetLanguage(char const*) = 0;
    virtual unknown_ret TrackAppUsageEvent(CGameID, int, char const*) = 0;
    virtual unknown_ret RaiseConnectionPriority(EConnectionPriority, EConnectionPriorityReason) = 0;
    virtual unknown_ret ResetConnectionPriority(int) = 0;
    virtual unknown_ret BHasCachedCredentials(char const*) = 0;
    virtual unknown_ret SetAccountNameForCachedCredentialLogin(char const*, bool) = 0;
    virtual unknown_ret DestroyCachedCredentials(char const*) = 0;
    virtual unknown_ret GetCurrentWebAuthToken(char*, int, char*, int) = 0;
    virtual unknown_ret RequestWebAuthToken() = 0;
    virtual unknown_ret SetLoginInformation(char const*, char const*, bool) = 0;
    virtual unknown_ret SetTwoFactorCode(char const*) = 0;
    virtual unknown_ret ClearAllLoginInformation() = 0;
    virtual unknown_ret BEnableEmbeddedClient(unsigned int) = 0;
    virtual unknown_ret ResetEmbeddedClient(unsigned int) = 0;
    virtual unknown_ret BHasEmbeddedClientToken(unsigned int) = 0;
    virtual unknown_ret RequestEmbeddedClientToken(unsigned int) = 0;
    virtual unknown_ret AuthorizeNewDevice(unsigned int, unsigned int, char const*) = 0;
    virtual unknown_ret GetLanguage(char*, int) = 0;
    virtual unknown_ret BIsCyberCafe() = 0;
    virtual unknown_ret BIsAcademicAccount() = 0;
    virtual unknown_ret BIsPortal2EducationAccount() = 0;
    virtual unknown_ret BIsAlienwareDemoAccount() = 0;
    virtual unknown_ret TrackNatTraversalStat(CNatTraversalStat const*) = 0;
    virtual unknown_ret TrackSteamUsageEvent(ESteamUsageEvent, unsigned char const*, unsigned int) = 0;
    virtual unknown_ret TrackSteamGUIUsage(char const*) = 0;
    virtual unknown_ret SetComputerInUse() = 0;
    virtual unknown_ret BIsGameRunning(CGameID) = 0;
    virtual unknown_ret BIsGameWindowReady(CGameID) = 0;
    virtual unknown_ret BUpdateAppOwnershipTicket(unsigned int, bool) = 0;
    virtual unknown_ret RequestCustomBinary(char const*, unsigned int, bool, bool) = 0;
    virtual unknown_ret GetCustomBinariesState(unsigned int, long long*, long long*) = 0;
    virtual unknown_ret RequestCustomBinaries(unsigned int, bool, bool, unsigned int*) = 0;
    virtual unknown_ret SetCellID(unsigned int) = 0;
    virtual unknown_ret GetUserBaseFolder() = 0;
    virtual unknown_ret GetUserDataFolder(CGameID, char*, int) = 0;
    virtual unknown_ret GetUserConfigFolder(char*, int) = 0;
    virtual unknown_ret GetAccountName(char*, unsigned int) = 0;
    virtual unknown_ret GetAccountName(CSteamID, char*, unsigned int) = 0;
    virtual unknown_ret IsPasswordRemembered() = 0;
    virtual unknown_ret CheckoutSiteLicenseSeat(unsigned int) = 0;
    virtual unknown_ret GetAvailableSeats(unsigned int) = 0;
    virtual unknown_ret GetAssociatedSiteName() = 0;
    virtual unknown_ret BIsRunningInCafe() = 0;
    virtual unknown_ret BAllowCachedCredentialsInCafe() = 0;
    virtual unknown_ret RequiresLegacyCDKey(unsigned int, bool*) = 0;
    virtual unknown_ret GetLegacyCDKey(unsigned int, char*, int) = 0;
    virtual unknown_ret SetLegacyCDKey(unsigned int, char const*) = 0;
    virtual unknown_ret WriteLegacyCDKey(unsigned int) = 0;
    virtual unknown_ret RemoveLegacyCDKey(unsigned int) = 0;
    virtual unknown_ret RequestLegacyCDKeyFromApp(unsigned int, unsigned int, unsigned int) = 0;
    virtual unknown_ret BIsAnyGameRunning() = 0;
    virtual unknown_ret GetSteamGuardDetails() = 0;
    virtual unknown_ret GetTwoFactorDetails() = 0;
    virtual unknown_ret BHasTwoFactor() = 0;
    virtual unknown_ret GetEmail(char*, int, bool*) = 0;
    virtual unknown_ret FindAccountsByCdKey(char const*) = 0;
    virtual unknown_ret Test_FakeConnectionTimeout() = 0;
    virtual unknown_ret RunInstallScript(unsigned int, char const*, bool) = 0;
    virtual unknown_ret IsInstallScriptRunning() = 0;
    virtual unknown_ret GetInstallScriptState(char*, unsigned int, unsigned int*, unsigned int*) = 0;
    virtual unknown_ret SpawnProcess(char const*, char const*, unsigned int, char const*, CGameID, char const*, unsigned int, unsigned int, unsigned int) = 0;
    virtual unknown_ret GetAppOwnershipTicketLength(unsigned int) = 0;
    virtual unknown_ret GetAppOwnershipTicketData(unsigned int, void*, unsigned int) = 0;
    virtual unknown_ret GetAppOwnershipTicketExtendedData(unsigned int, void*, unsigned int, unsigned int*, unsigned int*, unsigned int*, unsigned int*) = 0;
    virtual unknown_ret GetMarketingMessageCount() = 0;
    virtual unknown_ret GetMarketingMessage(int, unsigned long long*, char*, int, EMarketingMessageFlags*) = 0;
    virtual unknown_ret GetAuthSessionTicket(void*, int, unsigned int*) = 0;
    virtual unknown_ret BeginAuthSession(void const*, int, CSteamID) = 0;
    virtual unknown_ret EndAuthSession(CSteamID) = 0;
    virtual unknown_ret CancelAuthTicket(unsigned int) = 0;
    virtual unknown_ret IsUserSubscribedAppInTicket(CSteamID, unsigned int) = 0;
    virtual unknown_ret AdvertiseGame(CGameID, CSteamID, unsigned int, unsigned short) = 0;
    virtual unknown_ret RequestEncryptedAppTicket(void*, int) = 0;
    virtual unknown_ret GetEncryptedAppTicket(void*, int, unsigned int*) = 0;
    virtual unknown_ret GetGameBadgeLevel(int, bool) = 0;
    virtual unknown_ret GetPlayerSteamLevel() = 0;
    virtual unknown_ret SetAccountLimited(bool) = 0;
    virtual unknown_ret BIsAccountLimited() = 0;
    virtual unknown_ret SetAccountCommunityBanned(bool) = 0;
    virtual unknown_ret BIsAccountCommunityBanned() = 0;
    virtual unknown_ret SetLimitedAccountCanInviteFriends(bool) = 0;
    virtual unknown_ret BLimitedAccountCanInviteFriends() = 0;
    virtual unknown_ret SendValidationEmail() = 0;
    virtual unknown_ret BGameConnectTokensAvailable() = 0;
    virtual unknown_ret NumGamesRunning() = 0;
    virtual unknown_ret GetRunningGameID(int) = 0;
    virtual unknown_ret GetRunningGamePID(int) = 0;
    virtual unknown_ret GetAccountSecurityPolicyFlags() = 0;
    virtual unknown_ret SetClientStat(EClientStat, long long, unsigned int, unsigned int, unsigned int) = 0;
    virtual unknown_ret VerifyPassword(char const*) = 0;
    virtual unknown_ret BSupportUser() = 0;
    virtual unknown_ret BNeedsSSANextSteamLogon() = 0;
    virtual unknown_ret ClearNeedsSSANextSteamLogon() = 0;
    virtual unknown_ret BIsAppOverlayEnabled(CGameID) = 0;
    virtual unknown_ret BOverlayIgnoreChildProcesses(CGameID) = 0;
    virtual unknown_ret BIsBehindNAT() = 0;
    virtual unknown_ret GetMicroTxnAppID(unsigned long long) = 0;
    virtual unknown_ret GetMicroTxnOrderID(unsigned long long) = 0;
    virtual unknown_ret BGetMicroTxnPrice(unsigned long long, CAmount*, CAmount*, bool*, CAmount*) = 0;
    virtual unknown_ret BGetMicroTxnBillingAddressValue(unsigned long long, char const*, char*, unsigned int) = 0;
    virtual unknown_ret BGetMicroTxnBillingAddressRequirements(unsigned long long, bool*, bool*) = 0;
    virtual unknown_ret GetMicroTxnLineItemCount(unsigned long long) = 0;
    virtual unknown_ret BGetMicroTxnLineItem(unsigned long long, unsigned int, CAmount*, unsigned int*, char*, unsigned int, int*, unsigned char*, CAmount*, bool*) = 0;
    virtual unknown_ret BIsSandboxMicroTxn(unsigned long long, bool*) = 0;
    virtual unknown_ret BMicroTxnRequiresCachedPmtMethod(unsigned long long, bool*) = 0;
    virtual unknown_ret AuthorizeMicroTxn(unsigned long long, EMicroTxnAuthResponse) = 0;
    virtual unknown_ret BGetWalletBalance(bool*, CAmount*, CAmount*) = 0;
    virtual unknown_ret RequestMicroTxnInfo(unsigned long long) = 0;
    virtual unknown_ret BMicroTxnRefundable(unsigned long long) = 0;
    virtual unknown_ret BGetAppMinutesPlayed(unsigned int, int*, int*) = 0;
    virtual unknown_ret GetAppLastPlayedTime(unsigned int) = 0;
    virtual unknown_ret GetAppUpdateDisabledSecondsRemaining(unsigned int) = 0;
    virtual unknown_ret BGetGuideURL(unsigned int, char*, unsigned int) = 0;
    virtual unknown_ret BPromptToVerifyEmail() = 0;
    virtual unknown_ret BPromptToChangePassword() = 0;
    virtual unknown_ret BAccountExtraSecurity() = 0;
    virtual unknown_ret BAccountShouldShowLockUI() = 0;
    virtual unknown_ret GetCountAuthedComputers() = 0;
    virtual unknown_ret BSteamGuardNewMachineNotification() = 0;
    virtual unknown_ret GetSteamGuardEnabledTime() = 0;
    virtual unknown_ret GetSteamGuardHistoryEntry(int, unsigned int*, unsigned int*, bool*, char*, int, char*, int) = 0;
    virtual unknown_ret SetSteamGuardNewMachineDialogResponse(bool, bool) = 0;
    virtual unknown_ret SetPhoneIsVerified(bool) = 0;
    virtual unknown_ret BIsPhoneVerified() = 0;
    virtual unknown_ret SetPhoneIsIdentifying(bool) = 0;
    virtual unknown_ret BIsPhoneIdentifying() = 0;
    virtual unknown_ret SetPhoneIsRequiringVerification(bool) = 0;
    virtual unknown_ret BIsPhoneRequiringVerification() = 0;
    virtual unknown_ret ChangeTwoFactorAuthOptions(int) = 0;
    virtual unknown_ret Set2ndFactorAuthCode(char const*, bool) = 0;
    virtual unknown_ret SetUserMachineName(char const*) = 0;
    virtual unknown_ret GetUserMachineName(char*, int) = 0;
    virtual unknown_ret GetEmailDomainFromLogonFailure(char*, int) = 0;
    virtual unknown_ret GetDurationControl() = 0;
    virtual unknown_ret GetDurationControlForApp(unsigned int) = 0;
    virtual unknown_ret BIsSubscribedApp(unsigned int) = 0;
    virtual unknown_ret GetSubscribedApps(unsigned int*, unsigned int, bool) = 0;
    virtual unknown_ret RegisterActivationCode(char const*) = 0;
    virtual unknown_ret AckSystemIM(unsigned long long) = 0;
    virtual unknown_ret RequestSpecialSurvey(unsigned int) = 0;
    virtual unknown_ret SendSpecialSurveyResponse(unsigned int, unsigned char const*, unsigned int) = 0;
    virtual unknown_ret RequestNotifications() = 0;
    virtual unknown_ret GetAppOwnershipInfo(unsigned int, unsigned int*, unsigned int*, char*) = 0;
    virtual unknown_ret SendGameWebCallback(unsigned int, char const*) = 0;
    virtual unknown_ret BIsStreamingUIToRemoteDevice() = 0;
    virtual unknown_ret BIsCurrentlyNVStreaming() = 0;
    virtual unknown_ret OnBigPictureForStreamingStartResult(bool, void*) = 0;
    virtual unknown_ret OnBigPictureForStreamingDone() = 0;
    virtual unknown_ret OnBigPictureForStreamingRestarting() = 0;
    virtual unknown_ret StopStreaming(unsigned int) = 0;
    virtual unknown_ret LockParentalLock() = 0;
    virtual unknown_ret UnlockParentalLock(char const*) = 0;
    virtual unknown_ret BIsParentalLockEnabled() = 0;
    virtual unknown_ret BIsParentalLockLocked() = 0;
    virtual unknown_ret BlockApp(unsigned int) = 0;
    virtual unknown_ret UnblockApp(unsigned int) = 0;
    virtual unknown_ret BIsAppBlocked(unsigned int) = 0;
    virtual unknown_ret BIsAppInBlockList(unsigned int) = 0;
    virtual unknown_ret BlockFeature(EParentalFeature) = 0;
    virtual unknown_ret UnblockFeature(EParentalFeature) = 0;
    virtual unknown_ret BIsFeatureBlocked(EParentalFeature) = 0;
    virtual unknown_ret BIsFeatureInBlockList(EParentalFeature) = 0;
    virtual unknown_ret GetParentalUnlockTime() = 0;
    virtual unknown_ret BGetRecoveryEmail(char*, int) = 0;
    virtual unknown_ret RequestParentalRecoveryEmail() = 0;
    virtual unknown_ret BIsLockFromSiteLicense() = 0;
    virtual unknown_ret BGetSerializedParentalSettings(CUtlBuffer*) = 0;
    virtual unknown_ret BSetParentalSettings(CUtlBuffer*) = 0;
    virtual unknown_ret BDisableParentalSettings() = 0;
    virtual unknown_ret BGetParentalWebToken(CUtlBuffer*, CUtlBuffer*) = 0;
    virtual unknown_ret GetCommunityPreference(ECommunityPreference) = 0;
    virtual unknown_ret SetCommunityPreference(ECommunityPreference, bool) = 0;
    virtual unknown_ret BCanLogonOfflineMode() = 0;
    virtual unknown_ret LogOnOfflineMode() = 0;
    virtual unknown_ret ValidateOfflineLogonTicket(char const*) = 0;
    virtual unknown_ret BGetOfflineLogonTicket(char const*, COffline_OfflineLogonTicket*) = 0;
    virtual unknown_ret UploadLocalClientLogs() = 0;
    virtual unknown_ret SetAsyncNotificationEnabled(unsigned int, bool) = 0;
    virtual unknown_ret BIsOtherSessionPlaying(unsigned int*) = 0;
    virtual unknown_ret BKickOtherPlayingSession() = 0;
    virtual unknown_ret BIsAccountLockedDown() = 0;
    virtual unknown_ret ClearAndSetAppTags(CGameID, SteamParamStringArray_t const*) = 0;
    virtual unknown_ret RemoveAppTag(CGameID, char const*) = 0;
    virtual unknown_ret AddAppTag(CGameID, char const*) = 0;
    virtual unknown_ret ClearAppTags(CGameID) = 0;
    virtual unknown_ret SetAppHidden(CGameID, bool) = 0;
    virtual unknown_ret RequestAccountLinkInfo() = 0;
    virtual unknown_ret RequestSurveySchedule() = 0;
    virtual unknown_ret RequestNewSteamAnnouncementState() = 0;
    virtual unknown_ret UpdateSteamAnnouncementLastRead(unsigned long long, unsigned int) = 0;
    virtual unknown_ret GetMarketEligibility() = 0;
    virtual unknown_ret UpdateGameVrDllState(CGameID, bool, bool) = 0;
    virtual unknown_ret BIsAnyGameOrServiceAppRunning() = 0;
    virtual unknown_ret BGetAppArrayMinutesPlayed(unsigned int*, int, int*, int*) = 0;
    virtual unknown_ret BGetAppsLastPlayedTime(unsigned int*, int, unsigned int*) = 0;
    virtual unknown_ret SendSteamServiceStatusUpdate(EResult, ESteamServiceStatusUpdate) = 0;
};
