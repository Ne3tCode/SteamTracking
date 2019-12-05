class IClientRemoteClientManager
{
public:
    virtual unknown_ret SetUIReadyForStream(bool) = 0;
    virtual unknown_ret StreamingAudioPreparationComplete(bool) = 0;
    virtual unknown_ret StreamingAudioFinished() = 0;
    virtual unknown_ret ProcessStreamAvailable(unsigned int, unsigned int) = 0;
    virtual unknown_ret ProcessStreamShutdown(unsigned int) = 0;
    virtual unknown_ret UpdateStreamClientResolution(unsigned int, int, int) = 0;
    virtual unknown_ret ProcessStreamClientConnected(unsigned int) = 0;
    virtual unknown_ret ProcessStreamClientDisconnected(unsigned int) = 0;
    virtual unknown_ret BGetStreamTransportSignal(unsigned int, CUtlBuffer*) = 0;
    virtual unknown_ret SendStreamTransportSignal(unsigned int, CUtlBuffer const*) = 0;
    virtual unknown_ret ConnectToRemote(unsigned long long) = 0;
    virtual unknown_ret ConnectToRemoteAddress(char const*) = 0;
    virtual unknown_ret RefreshRemoteClients(bool) = 0;
    virtual unknown_ret GetClientPlatformTypes() = 0;
    virtual unknown_ret GetRemoteClientCount() = 0;
    virtual unknown_ret GetRemoteClientIDByIndex(unsigned int) = 0;
    virtual unknown_ret GetRemoteClientNameByIndex(unsigned int) = 0;
    virtual unknown_ret GetRemoteClientConnectStateByIndex(unsigned int) = 0;
    virtual unknown_ret BRemoteClientHasStreamingSupportedByIndex(unsigned int) = 0;
    virtual unknown_ret BRemoteClientHasStreamingEnabledByIndex(unsigned int) = 0;
    virtual unknown_ret GetRemoteClientAppStateByIndex(unsigned int, unsigned int) = 0;
    virtual unknown_ret GetRemoteClientConnectedCount() = 0;
    virtual unknown_ret GetRemoteClientStreamingEnabledCount() = 0;
    virtual unknown_ret GetRemoteClientName(unsigned long long) = 0;
    virtual unknown_ret GetRemoteClientConnectState(unsigned long long) = 0;
    virtual unknown_ret BRemoteClientHasStreamingSupported(unsigned long long) = 0;
    virtual unknown_ret BRemoteClientHasStreamingEnabled(unsigned long long) = 0;
    virtual unknown_ret GetRemoteClientAppAvailability(unsigned long long, unsigned int) = 0;
    virtual unknown_ret GetRemoteClientAppState(unsigned long long, unsigned int) = 0;
    virtual unknown_ret GetRemoteDeviceCount() = 0;
    virtual unknown_ret GetRemoteDeviceIDByIndex(unsigned int) = 0;
    virtual unknown_ret GetRemoteDeviceNameByIndex(unsigned int) = 0;
    virtual unknown_ret GetRemoteDeviceName(unsigned long long) = 0;
    virtual unknown_ret UnpairRemoteDevices() = 0;
    virtual unknown_ret BIsStreamingSupported() = 0;
    virtual unknown_ret BIsStreamingEnabled() = 0;
    virtual unknown_ret SetStreamingEnabled(bool) = 0;
    virtual unknown_ret StartStream(unsigned long long, unsigned int, int, ERemoteClientStreamEnv, RemoteClientReservedGamepad_t const*, int) = 0;
    virtual unknown_ret BIsRemoteLaunch(CGameID) = 0;
    virtual unknown_ret BIsBigPictureActiveForStreaming() = 0;
    virtual unknown_ret BIsStreamingSessionActive() = 0;
    virtual unknown_ret BIsStreamingSessionActiveForGame(CGameID) = 0;
    virtual unknown_ret BIsStreamingClientConnected() = 0;
    virtual unknown_ret StopStreamingSession(unsigned int) = 0;
    virtual unknown_ret LaunchAppResult(unsigned int, ERemoteClientLaunchResult) = 0;
    virtual unknown_ret BIsStreamStartInProgress(unsigned long long, unsigned int) = 0;
    virtual unknown_ret LaunchAppResultRequestLaunchOption(unsigned int, int const*, int) = 0;
    virtual unknown_ret AcceptEULA(unsigned long long, unsigned int) = 0;
    virtual unknown_ret GetRemoteClientPlatformName(unsigned long long, bool*) = 0;
    virtual unknown_ret BIsStreamClientRunning() = 0;
    virtual unknown_ret BIsStreamClientRunning(CGameID) = 0;
    virtual unknown_ret BIsStreamClientRunningConnectedToClient(CGameID, unsigned long long) = 0;
    virtual unknown_ret RequestControllerConfig(unsigned long long, unsigned int, unsigned int) = 0;
    virtual unknown_ret PostControllerConfig(unsigned long long, unsigned char const*, unsigned int) = 0;
    virtual unknown_ret GetControllerConfig(unsigned long long, unsigned char*, unsigned int) = 0;
    virtual unknown_ret SetRemoteDeviceAuthorized(bool, char const*) = 0;
    virtual unknown_ret SetStreamingDriversInstalled(bool) = 0;
    virtual unknown_ret SetStreamingPIN(char const*) = 0;
    virtual unknown_ret GetStreamingPINSize(int*) = 0;
    virtual unknown_ret UnlockHEVC() = 0;
    virtual unknown_ret UsedVideoX264() = 0;
    virtual unknown_ret UsedVideoH264() = 0;
    virtual unknown_ret UsedVideoHEVC() = 0;
    virtual unknown_ret BHasRemotePlayInviteAndSession(CSteamID) = 0;
    virtual unknown_ret CreateRemotePlayInviteAndSession(CSteamID, unsigned int) = 0;
    virtual unknown_ret CancelRemotePlayInviteAndSession(CSteamID) = 0;
    virtual unknown_ret JoinRemotePlaySession(CSteamID, char const*) = 0;
    virtual unknown_ret BStreamingDesktopToRemotePlayTogetherEnabled() = 0;
    virtual unknown_ret SetStreamingDesktopToRemotePlayTogetherEnabled(bool) = 0;
    virtual unknown_ret SetPerUserKeyboardInputEnabled(CSteamID, bool) = 0;
    virtual unknown_ret SetPerUserMouseInputEnabled(CSteamID, bool) = 0;
    virtual unknown_ret SetPerUserControllerInputEnabled(CSteamID, bool) = 0;
    virtual unknown_ret GetPerUserInputSettings(CSteamID, RemoteClientInputSettings_t*) = 0;
    virtual unknown_ret OnClientUsedInput(CSteamID, EClientUsedInputType) = 0;
    virtual unknown_ret OnPlaceholderStateChanged(bool) = 0;
    virtual unknown_ret ShutdownStreamClients(bool) = 0;
};
