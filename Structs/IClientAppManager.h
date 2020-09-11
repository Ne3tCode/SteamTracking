class IClientAppManager
{
public:
    virtual unknown_ret InstallApp(unsigned int, int, bool) = 0;
    virtual unknown_ret UninstallApp(unsigned int, bool) = 0;
    virtual unknown_ret LaunchApp(CGameID, unsigned int, unsigned int, char const*) = 0;
    virtual unknown_ret ShutdownApp(unsigned int, bool) = 0;
    virtual unknown_ret GetAppInstallState(unsigned int) = 0;
    virtual unknown_ret GetAppBuildID(unsigned int) = 0;
    virtual unknown_ret GetCurrentAppSizeOnDisk(unsigned int) = 0;
    virtual unknown_ret GetRequiredAppsSizeOnDisk(unsigned int const*, int) = 0;
    virtual unknown_ret GetAppInstallDir(unsigned int, char*, unsigned int) = 0;
    virtual unknown_ret IsAppDlcInstalled(unsigned int, unsigned int) = 0;
    virtual unknown_ret GetDlcDownloadProgress(unsigned int, unsigned int, unsigned long long*, unsigned long long*) = 0;
    virtual unknown_ret GetDlcSizeOnDisk(unsigned int, unsigned int) = 0;
    virtual unknown_ret BIsDlcEnabled(unsigned int, unsigned int, bool*) = 0;
    virtual unknown_ret SetDlcEnabled(unsigned int, unsigned int, bool) = 0;
    virtual unknown_ret GetNumInstalledApps() = 0;
    virtual unknown_ret GetInstalledApps(unsigned int*, unsigned int) = 0;
    virtual unknown_ret GetAppDependency(unsigned int) = 0;
    virtual unknown_ret GetAppDependencies(unsigned int, unsigned int*, unsigned int) = 0;
    virtual unknown_ret GetDependentApps(unsigned int, unsigned int*, unsigned int) = 0;
    virtual unknown_ret GetUpdateInfo(unsigned int, AppUpdateInfo_s*) = 0;
    virtual unknown_ret GetAppConfigValue(unsigned int, char const*, char*, int) = 0;
    virtual unknown_ret SetAppConfigValue(unsigned int, char const*, char const*) = 0;
    virtual unknown_ret BIsAppUpToDate(unsigned int) = 0;
    virtual unknown_ret GetAvailableLanguages(unsigned int, bool, char*, unsigned int) = 0;
    virtual unknown_ret GetCurrentLanguage(unsigned int, char*, unsigned int) = 0;
    virtual unknown_ret GetCurrentLanguage(unsigned int) = 0;
    virtual unknown_ret GetFallbackLanguage(unsigned int, ELanguage) = 0;
    virtual unknown_ret SetCurrentLanguage(unsigned int, ELanguage) = 0;
    virtual unknown_ret StartValidatingApp(unsigned int) = 0;
    virtual unknown_ret CancelValidation(unsigned int) = 0;
    virtual unknown_ret MarkContentCorrupt(unsigned int, bool) = 0;
    virtual unknown_ret GetInstalledDepots(unsigned int, unsigned int*, unsigned int) = 0;
    virtual unknown_ret GetFileDetails(unsigned int, char const*) = 0;
    virtual unknown_ret VerifySignedFiles(unsigned int) = 0;
    virtual unknown_ret GetAvailableBetas(unsigned int, int*, char*, int) = 0;
    virtual unknown_ret CheckBetaPassword(unsigned int, char const*) = 0;
    virtual unknown_ret BHasCachedBetaPassword(unsigned int, char const*) = 0;
    virtual unknown_ret GetActiveBeta(unsigned int, char*, int) = 0;
    virtual unknown_ret BGetActiveBetaForApps(unsigned int*, int, char*, int) = 0;
    virtual unknown_ret BIsManifestAvailableForUser(unsigned int, unsigned int, unsigned long long) = 0;
    virtual unknown_ret SetDownloadingEnabled(bool) = 0;
    virtual unknown_ret BIsDownloadingEnabled() = 0;
    virtual unknown_ret GetDownloadStats(DownloadStats_s*) = 0;
    virtual unknown_ret GetDownloadingAppID() = 0;
    virtual unknown_ret GetAutoUpdateTimeRestrictionEnabled() = 0;
    virtual unknown_ret SetAutoUpdateTimeRestrictionEnabled(bool) = 0;
    virtual unknown_ret GetAutoUpdateTimeRestrictionHours(int*, int*) = 0;
    virtual unknown_ret SetAutoUpdateTimeRestrictionStartHour(int) = 0;
    virtual unknown_ret SetAutoUpdateTimeRestrictionEndHour(int) = 0;
    virtual unknown_ret GetAppAutoUpdateBehavior(unsigned int) = 0;
    virtual unknown_ret SetAppAutoUpdateBehavior(unsigned int, EAppAutoUpdateBehavior) = 0;
    virtual unknown_ret SetAppAllowDownloadsWhileRunningBehavior(unsigned int, EAppAllowDownloadsWhileRunningBehavior) = 0;
    virtual unknown_ret GetAppAllowDownloadsWhileRunningBehavior(unsigned int) = 0;
    virtual unknown_ret SetAllowDownloadsWhileAnyAppRunning(bool) = 0;
    virtual unknown_ret BAllowDownloadsWhileAnyAppRunning() = 0;
    virtual unknown_ret ChangeAppDownloadQueuePlacement(unsigned int, EAppDownloadQueuePlacement) = 0;
    virtual unknown_ret SetAppDownloadQueueIndex(unsigned int, int) = 0;
    virtual unknown_ret GetAppDownloadQueueIndex(unsigned int) = 0;
    virtual unknown_ret GetAppAutoUpdateDelayedUntilTime(unsigned int) = 0;
    virtual unknown_ret GetNumAppsInDownloadQueue() = 0;
    virtual unknown_ret BHasLocalContentServer() = 0;
    virtual unknown_ret BuildBackup(unsigned int, unsigned long long, char const*) = 0;
    virtual unknown_ret BuildInstaller(char const*, char const*, char const*, char const*) = 0;
    virtual unknown_ret CancelBackup() = 0;
    virtual unknown_ret RestoreApp(unsigned int, int, char const*) = 0;
    virtual unknown_ret CanMoveApp(unsigned int) = 0;
    virtual unknown_ret MoveApp(unsigned int, int) = 0;
    virtual unknown_ret GetMoveAppProgress(unsigned int, unsigned long long*, unsigned long long*, unsigned int*) = 0;
    virtual unknown_ret CancelMoveApp(unsigned int) = 0;
    virtual unknown_ret BNeedsFile(unsigned int, char const*, unsigned long long, unsigned int) = 0;
    virtual unknown_ret BAddFileOnDisk(unsigned int, char const*, unsigned long long, unsigned int, SHADigestWrapper_t) = 0;
    virtual unknown_ret FinishAddingFiles(unsigned int) = 0;
    virtual unknown_ret GetAppStateInfo(unsigned int, AppStateInfo_s*) = 0;
    virtual unknown_ret BIsAvailableOnPlatform(unsigned int, char const*) = 0;
    virtual unknown_ret BCanRemotePlayTogether(unsigned int) = 0;
    virtual unknown_ret BIsLocalMultiplayerApp(unsigned int) = 0;
    virtual unknown_ret GetNumInstallBaseFolders() = 0;
    virtual unknown_ret GetInstallBaseFolder(int, char*, int) = 0;
    virtual unknown_ret AddInstallBaseFolder(char const*) = 0;
    virtual unknown_ret RemoveInstallBaseFolder(int) = 0;
    virtual unknown_ret GetFreeDiskSpace(int) = 0;
    virtual unknown_ret BGetDiskSpaceStats(int, unsigned long long*, unsigned long long*) = 0;
    virtual unknown_ret GetAppInstallBaseFolder(unsigned int) = 0;
    virtual unknown_ret ForceInstallDirOverride(char const*) = 0;
    virtual unknown_ret SetDownloadThrottleRateKbps(int, bool) = 0;
    virtual unknown_ret GetDownloadThrottleRateKbps(bool) = 0;
    virtual unknown_ret SuspendDownloadThrottling(bool) = 0;
    virtual unknown_ret SetThrottleDownloadsWhileStreaming(bool) = 0;
    virtual unknown_ret BThrottleDownloadsWhileStreaming() = 0;
    virtual unknown_ret GetLaunchQueryParam(unsigned int, char const*) = 0;
    virtual unknown_ret BeginLaunchQueryParams(unsigned int) = 0;
    virtual unknown_ret SetLaunchQueryParam(unsigned int, char const*, char const*) = 0;
    virtual unknown_ret CommitLaunchQueryParams(unsigned int, char const*) = 0;
    virtual unknown_ret GetLaunchCommandLine(unsigned int, char*, int) = 0;
    virtual unknown_ret AddContentLogLine(StringView) = 0;
    virtual unknown_ret GetSystemIconFile(unsigned int, char*, int, unsigned int*) = 0;
    virtual unknown_ret SetUseHTTPSForDownloads(bool) = 0;
    virtual unknown_ret GetUseHTTPSForDownloads() = 0;
    virtual unknown_ret SetAppPlatformOverride(unsigned int, char const*, char const*) = 0;
};
