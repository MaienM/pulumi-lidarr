// Copyright 2016-2018, Pulumi Corporation.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package lidarr

import (
	_ "embed"
	"fmt"
	"path/filepath"
	"strings"

	"github.com/MaienM/pulumi-lidarr/provider/pkg/version"
	shimprovider "github.com/devopsarr/terraform-provider-lidarr/shim"
	"github.com/ettle/strcase"
	pf "github.com/pulumi/pulumi-terraform-bridge/pf/tfbridge"
	"github.com/pulumi/pulumi-terraform-bridge/v3/pkg/tfbridge"
	"github.com/pulumi/pulumi/sdk/v3/go/common/tokens"
	"github.com/pulumi/pulumi/sdk/v3/go/common/util/contract"
)

//go:embed cmd/pulumi-resource-lidarr/bridge-metadata.json
var bridgeMetadata []byte

// all of the token components used below.
const (
	// This variable controls the default name of the package in the package
	mainMod            = "index" // the lidarr module
	modArtists         = "Artists"
	modDownloadClients = "DownloadClients"
	modImportLists     = "ImportLists"
	modIndexers        = "Indexers"
	modMediaManagement = "MediaManagement"
	modMetadata        = "Metadata"
	modNotifications   = "Notifications"
	modProfiles        = "Profiles"
	modStatus          = "Status"
	modTags            = "Tags"
)

func convertName(name string) string {
	idx := strings.Index(name, "_")
	contract.Assertf(idx > 0 && idx < len(name)-1, "Invalid snake case name %s", name)
	name = name[idx+1:]
	contract.Assertf(len(name) > 0, "Invalid snake case name %s", name)
	return strcase.ToPascal(name)
}

func makeDataSource(mod string, name string) tokens.ModuleMember {
	name = convertName(name)
	return tfbridge.MakeDataSource("lidarr", mod, "get"+name)
}

func makeResource(mod string, res string) tokens.Type {
	return tfbridge.MakeResource("lidarr", mod, convertName(res))
}

// Provider returns additional overlaid schema and metadata associated with the provider..
func Provider() tfbridge.ProviderInfo {
	// Instantiate the Terraform provider
	p := pf.ShimProvider(shimprovider.NewProvider(version.Version)())

	// Create a Pulumi provider mapping
	return tfbridge.ProviderInfo{
		Name: "lidarr",
		P:    p,
		// DisplayName is a way to be able to change the casing of the provider
		// name when being displayed on the Pulumi registry
		DisplayName: "lidarr",
		// The default publisher for all packages is Pulumi.
		// Change this to your personal name (or a company name) that you
		// would like to be shown in the Pulumi Registry if this package is published
		// there.
		Publisher: "MaienM",
		// LogoURL is optional but useful to help identify your package in the Pulumi Registry
		// if this package is published there.
		//
		// You may host a logo on a domain you control or add an SVG logo for your package
		// in your repository and use the raw content URL for that file as your logo URL.
		LogoURL: "https://raw.githubusercontent.com/MaienM/pulumi-lidarr/main/docs/lidarr.png",
		// PluginDownloadURL is an optional URL used to download the Provider
		// for use in Pulumi programs
		// e.g https://github.com/org/pulumi-provider-name/releases/
		PluginDownloadURL: "github://api.github.com/MaienM/pulumi-lidarr",
		Description:       "A Pulumi package for creating and managing a lidarr application.",
		// category/cloud tag helps with categorizing the package in the Pulumi Registry.
		// For all available categories, see `Keywords` in
		// https://www.pulumi.com/docs/guides/pulumi-packages/schema/#package.
		Keywords: []string{
			"pulumi",
			"lidarr",
			"category/infrastructure",
		},
		License:    "Apache-2.0",
		Homepage:   "https://github.com/MaienM/pulumi-lidarr",
		Repository: "https://github.com/MaienM/pulumi-lidarr",
		// The GitHub Org for the provider - defaults to `terraform-providers`. Note that this
		// should match the TF provider module's require directive, not any replace directives.
		Version:      version.Version,
		GitHubOrg:    "devopsarr",
		MetadataInfo: tfbridge.NewProviderMetadata(bridgeMetadata),
		Config:       map[string]*tfbridge.SchemaInfo{
			// Add any required configuration here, or remove the example below if
			// no additional points are required.
			// "region": {
			// 	Type: tfbridge.MakeType("region", "Region"),
			// 	Default: &tfbridge.DefaultInfo{
			// 		EnvVars: []string{"AWS_REGION", "AWS_DEFAULT_REGION"},
			// 	},
			// },
		},
		Resources: map[string]*tfbridge.ResourceInfo{
			"lidarr_artist": {Tok: makeResource(modArtists, "lidarr_artist")},

			"lidarr_download_client":                          {Tok: makeResource(modDownloadClients, "lidarr_download_client")},
			"lidarr_download_client_aria2":                    {Tok: makeResource(modDownloadClients, "lidarr_download_client_aria2")},
			"lidarr_download_client_config":                   {Tok: makeResource(modDownloadClients, "lidarr_download_client_config")},
			"lidarr_download_client_deluge":                   {Tok: makeResource(modDownloadClients, "lidarr_download_client_deluge")},
			"lidarr_download_client_flood":                    {Tok: makeResource(modDownloadClients, "lidarr_download_client_flood")},
			"lidarr_download_client_hadouken":                 {Tok: makeResource(modDownloadClients, "lidarr_download_client_hadouken")},
			"lidarr_download_client_nzbget":                   {Tok: makeResource(modDownloadClients, "lidarr_download_client_nzbget")},
			"lidarr_download_client_nzbvortex":                {Tok: makeResource(modDownloadClients, "lidarr_download_client_nzbvortex")},
			"lidarr_download_client_pneumatic":                {Tok: makeResource(modDownloadClients, "lidarr_download_client_pneumatic")},
			"lidarr_download_client_qbittorrent":              {Tok: makeResource(modDownloadClients, "lidarr_download_client_qbittorrent")},
			"lidarr_download_client_rtorrent":                 {Tok: makeResource(modDownloadClients, "lidarr_download_client_rtorrent")},
			"lidarr_download_client_sabnzbd":                  {Tok: makeResource(modDownloadClients, "lidarr_download_client_sabnzbd")},
			"lidarr_download_client_torrent_blackhole":        {Tok: makeResource(modDownloadClients, "lidarr_download_client_torrent_blackhole")},
			"lidarr_download_client_torrent_download_station": {Tok: makeResource(modDownloadClients, "lidarr_download_client_torrent_download_station")},
			"lidarr_download_client_transmission":             {Tok: makeResource(modDownloadClients, "lidarr_download_client_transmission")},
			"lidarr_download_client_usenet_blackhole":         {Tok: makeResource(modDownloadClients, "lidarr_download_client_usenet_blackhole")},
			"lidarr_download_client_usenet_download_station":  {Tok: makeResource(modDownloadClients, "lidarr_download_client_usenet_download_station")},
			"lidarr_download_client_utorrent":                 {Tok: makeResource(modDownloadClients, "lidarr_download_client_utorrent")},
			"lidarr_download_client_vuze":                     {Tok: makeResource(modDownloadClients, "lidarr_download_client_vuze")},
			"lidarr_remote_path_mapping":                      {Tok: makeResource(modDownloadClients, "lidarr_remote_path_mapping")},

			"lidarr_import_list":                   {Tok: makeResource(modImportLists, "lidarr_import_list")},
			"lidarr_import_list_exclusion":         {Tok: makeResource(modImportLists, "lidarr_import_list_exclusion")},
			"lidarr_import_list_headphones":        {Tok: makeResource(modImportLists, "lidarr_import_list_headphones")},
			"lidarr_import_list_lastfm_tag":        {Tok: makeResource(modImportLists, "lidarr_import_list_lastfm_tag")},
			"lidarr_import_list_lastfm_user":       {Tok: makeResource(modImportLists, "lidarr_import_list_lastfm_user")},
			"lidarr_import_list_lidarr":            {Tok: makeResource(modImportLists, "lidarr_import_list_lidarr")},
			"lidarr_import_list_lidarr_list":       {Tok: makeResource(modImportLists, "lidarr_import_list_lidarr_list")},
			"lidarr_import_list_music_brainz":      {Tok: makeResource(modImportLists, "lidarr_import_list_music_brainz")},
			"lidarr_import_list_spotify_albums":    {Tok: makeResource(modImportLists, "lidarr_import_list_spotify_albums")},
			"lidarr_import_list_spotify_artists":   {Tok: makeResource(modImportLists, "lidarr_import_list_spotify_artists")},
			"lidarr_import_list_spotify_playlists": {Tok: makeResource(modImportLists, "lidarr_import_list_spotify_playlists")},

			"lidarr_indexer":              {Tok: makeResource(modIndexers, "lidarr_indexer")},
			"lidarr_indexer_config":       {Tok: makeResource(modIndexers, "lidarr_indexer_config")},
			"lidarr_indexer_filelist":     {Tok: makeResource(modIndexers, "lidarr_indexer_filelist")},
			"lidarr_indexer_gazelle":      {Tok: makeResource(modIndexers, "lidarr_indexer_gazelle")},
			"lidarr_indexer_headphones":   {Tok: makeResource(modIndexers, "lidarr_indexer_headphones")},
			"lidarr_indexer_iptorrents":   {Tok: makeResource(modIndexers, "lidarr_indexer_iptorrents")},
			"lidarr_indexer_newznab":      {Tok: makeResource(modIndexers, "lidarr_indexer_newznab")},
			"lidarr_indexer_nyaa":         {Tok: makeResource(modIndexers, "lidarr_indexer_nyaa")},
			"lidarr_indexer_rarbg":        {Tok: makeResource(modIndexers, "lidarr_indexer_rarbg")},
			"lidarr_indexer_redacted":     {Tok: makeResource(modIndexers, "lidarr_indexer_redacted")},
			"lidarr_indexer_torrent_rss":  {Tok: makeResource(modIndexers, "lidarr_indexer_torrent_rss")},
			"lidarr_indexer_torrentleech": {Tok: makeResource(modIndexers, "lidarr_indexer_torrentleech")},
			"lidarr_indexer_torznab":      {Tok: makeResource(modIndexers, "lidarr_indexer_torznab")},

			"lidarr_media_management": {Tok: makeResource(modMediaManagement, "lidarr_media_management")},
			"lidarr_naming":           {Tok: makeResource(modMediaManagement, "lidarr_naming")},
			"lidarr_root_folder":      {Tok: makeResource(modMediaManagement, "lidarr_root_folder")},

			"lidarr_metadata":         {Tok: makeResource(modMetadata, "lidarr_metadata")},
			"lidarr_metadata_config":  {Tok: makeResource(modMetadata, "lidarr_metadata_config")},
			"lidarr_metadata_kodi":    {Tok: makeResource(modMetadata, "lidarr_metadata_kodi")},
			"lidarr_metadata_roksbox": {Tok: makeResource(modMetadata, "lidarr_metadata_roksbox")},
			"lidarr_metadata_wdtv":    {Tok: makeResource(modMetadata, "lidarr_metadata_wdtv")},

			"lidarr_notification":                  {Tok: makeResource(modNotifications, "lidarr_notification")},
			"lidarr_notification_apprise":          {Tok: makeResource(modNotifications, "lidarr_notification_apprise")},
			"lidarr_notification_boxcar":           {Tok: makeResource(modNotifications, "lidarr_notification_boxcar")},
			"lidarr_notification_custom_script":    {Tok: makeResource(modNotifications, "lidarr_notification_custom_script")},
			"lidarr_notification_discord":          {Tok: makeResource(modNotifications, "lidarr_notification_discord")},
			"lidarr_notification_email":            {Tok: makeResource(modNotifications, "lidarr_notification_email")},
			"lidarr_notification_emby":             {Tok: makeResource(modNotifications, "lidarr_notification_emby")},
			"lidarr_notification_gotify":           {Tok: makeResource(modNotifications, "lidarr_notification_gotify")},
			"lidarr_notification_join":             {Tok: makeResource(modNotifications, "lidarr_notification_join")},
			"lidarr_notification_kodi":             {Tok: makeResource(modNotifications, "lidarr_notification_kodi")},
			"lidarr_notification_mailgun":          {Tok: makeResource(modNotifications, "lidarr_notification_mailgun")},
			"lidarr_notification_notifiarr":        {Tok: makeResource(modNotifications, "lidarr_notification_notifiarr")},
			"lidarr_notification_ntfy":             {Tok: makeResource(modNotifications, "lidarr_notification_ntfy")},
			"lidarr_notification_plex":             {Tok: makeResource(modNotifications, "lidarr_notification_plex")},
			"lidarr_notification_prowl":            {Tok: makeResource(modNotifications, "lidarr_notification_prowl")},
			"lidarr_notification_pushbullet":       {Tok: makeResource(modNotifications, "lidarr_notification_pushbullet")},
			"lidarr_notification_pushover":         {Tok: makeResource(modNotifications, "lidarr_notification_pushover")},
			"lidarr_notification_sendgrid":         {Tok: makeResource(modNotifications, "lidarr_notification_sendgrid")},
			"lidarr_notification_signal":           {Tok: makeResource(modNotifications, "lidarr_notification_signal")},
			"lidarr_notification_simplepush":       {Tok: makeResource(modNotifications, "lidarr_notification_simplepush")},
			"lidarr_notification_slack":            {Tok: makeResource(modNotifications, "lidarr_notification_slack")},
			"lidarr_notification_subsonic":         {Tok: makeResource(modNotifications, "lidarr_notification_subsonic")},
			"lidarr_notification_synology_indexer": {Tok: makeResource(modNotifications, "lidarr_notification_synology_indexer")},
			"lidarr_notification_telegram":         {Tok: makeResource(modNotifications, "lidarr_notification_telegram")},
			"lidarr_notification_twitter":          {Tok: makeResource(modNotifications, "lidarr_notification_twitter")},
			"lidarr_notification_webhook":          {Tok: makeResource(modNotifications, "lidarr_notification_webhook")},

			"lidarr_custom_format":      {Tok: makeResource(modProfiles, "lidarr_custom_format")},
			"lidarr_delay_profile":      {Tok: makeResource(modProfiles, "lidarr_delay_profile")},
			"lidarr_metadata_profile":   {Tok: makeResource(modProfiles, "lidarr_metadata_profile")},
			"lidarr_quality_definition": {Tok: makeResource(modProfiles, "lidarr_quality_definition")},
			"lidarr_quality_profile":    {Tok: makeResource(modProfiles, "lidarr_quality_profile")},
			"lidarr_release_profile":    {Tok: makeResource(modProfiles, "lidarr_release_profile")},

			"lidarr_tag": {Tok: makeResource(modTags, "lidarr_tag")},
		},
		DataSources: map[string]*tfbridge.DataSourceInfo{
			"lidarr_artist":  {Tok: makeDataSource(modArtists, "lidarr_artist")},
			"lidarr_artists": {Tok: makeDataSource(modArtists, "lidarr_artists")},

			"lidarr_download_client":        {Tok: makeDataSource(modDownloadClients, "lidarr_download_client")},
			"lidarr_download_client_config": {Tok: makeDataSource(modDownloadClients, "lidarr_download_client_config")},
			"lidarr_download_clients":       {Tok: makeDataSource(modDownloadClients, "lidarr_download_clients")},
			"lidarr_remote_path_mapping":    {Tok: makeDataSource(modDownloadClients, "lidarr_remote_path_mapping")},
			"lidarr_remote_path_mappings":   {Tok: makeDataSource(modDownloadClients, "lidarr_remote_path_mappings")},

			"lidarr_import_list":            {Tok: makeDataSource(modImportLists, "lidarr_import_list")},
			"lidarr_import_list_exclusion":  {Tok: makeDataSource(modImportLists, "lidarr_import_list_exclusion")},
			"lidarr_import_list_exclusions": {Tok: makeDataSource(modImportLists, "lidarr_import_list_exclusions")},
			"lidarr_import_lists":           {Tok: makeDataSource(modImportLists, "lidarr_import_lists")},

			"lidarr_indexer":        {Tok: makeDataSource(modIndexers, "lidarr_indexer")},
			"lidarr_indexer_config": {Tok: makeDataSource(modIndexers, "lidarr_indexer_config")},
			"lidarr_indexers":       {Tok: makeDataSource(modIndexers, "lidarr_indexers")},

			"lidarr_media_management": {Tok: makeDataSource(modMediaManagement, "lidarr_media_management")},
			"lidarr_naming":           {Tok: makeDataSource(modMediaManagement, "lidarr_naming")},
			"lidarr_root_folder":      {Tok: makeDataSource(modMediaManagement, "lidarr_root_folder")},
			"lidarr_root_folders":     {Tok: makeDataSource(modMediaManagement, "lidarr_root_folders")},

			"lidarr_metadata":           {Tok: makeDataSource(modMetadata, "lidarr_metadata")},
			"lidarr_metadata_config":    {Tok: makeDataSource(modMetadata, "lidarr_metadata_config")},
			"lidarr_metadata_consumers": {Tok: makeDataSource(modMetadata, "lidarr_metadata_consumers")},

			"lidarr_notification":  {Tok: makeDataSource(modNotifications, "lidarr_notification")},
			"lidarr_notifications": {Tok: makeDataSource(modNotifications, "lidarr_notifications")},

			"lidarr_custom_format":                         {Tok: makeDataSource(modProfiles, "lidarr_custom_format")},
			"lidarr_custom_format_condition":               {Tok: makeDataSource(modProfiles, "lidarr_custom_format_condition")},
			"lidarr_custom_format_condition_release_group": {Tok: makeDataSource(modProfiles, "lidarr_custom_format_condition_release_group")},
			"lidarr_custom_format_condition_release_title": {Tok: makeDataSource(modProfiles, "lidarr_custom_format_condition_release_title")},
			"lidarr_custom_format_condition_size":          {Tok: makeDataSource(modProfiles, "lidarr_custom_format_condition_size")},
			"lidarr_custom_formats":                        {Tok: makeDataSource(modProfiles, "lidarr_custom_formats")},
			"lidarr_delay_profile":                         {Tok: makeDataSource(modProfiles, "lidarr_delay_profile")},
			"lidarr_delay_profiles":                        {Tok: makeDataSource(modProfiles, "lidarr_delay_profiles")},
			"lidarr_metadata_profile":                      {Tok: makeDataSource(modProfiles, "lidarr_metadata_profile")},
			"lidarr_metadata_profiles":                     {Tok: makeDataSource(modProfiles, "lidarr_metadata_profiles")},
			"lidarr_primary_album_type":                    {Tok: makeDataSource(modProfiles, "lidarr_primary_album_type")},
			"lidarr_primary_album_types":                   {Tok: makeDataSource(modProfiles, "lidarr_primary_album_types")},
			"lidarr_quality":                               {Tok: makeDataSource(modProfiles, "lidarr_quality")},
			"lidarr_quality_definition":                    {Tok: makeDataSource(modProfiles, "lidarr_quality_definition")},
			"lidarr_quality_definitions":                   {Tok: makeDataSource(modProfiles, "lidarr_quality_definitions")},
			"lidarr_quality_profile":                       {Tok: makeDataSource(modProfiles, "lidarr_quality_profile")},
			"lidarr_quality_profiles":                      {Tok: makeDataSource(modProfiles, "lidarr_quality_profiles")},
			"lidarr_release_profile":                       {Tok: makeDataSource(modProfiles, "lidarr_release_profile")},
			"lidarr_release_profiles":                      {Tok: makeDataSource(modProfiles, "lidarr_release_profiles")},
			"lidarr_release_status":                        {Tok: makeDataSource(modProfiles, "lidarr_release_status")},
			"lidarr_release_statuses":                      {Tok: makeDataSource(modProfiles, "lidarr_release_statuses")},
			"lidarr_secondary_album_type":                  {Tok: makeDataSource(modProfiles, "lidarr_secondary_album_type")},
			"lidarr_secondary_album_types":                 {Tok: makeDataSource(modProfiles, "lidarr_secondary_album_types")},

			"lidarr_system_status": {Tok: makeDataSource(modStatus, "lidarr_system_status")},

			"lidarr_tag":  {Tok: makeDataSource(modTags, "lidarr_tag")},
			"lidarr_tags": {Tok: makeDataSource(modTags, "lidarr_tags")},
		},
		JavaScript: &tfbridge.JavaScriptInfo{
			PackageName: "@maienm/pulumi-lidarr",

			// List any npm dependencies and their versions
			Dependencies: map[string]string{
				"@pulumi/pulumi": "^3.0.0",
			},
			DevDependencies: map[string]string{
				"@types/node": "^10.0.0", // so we can access strongly typed node definitions.
				"@types/mime": "^2.0.0",
			},
			// See the documentation for tfbridge.OverlayInfo for how to lay out this
			// section, or refer to the AWS provider. Delete this section if there are
			// no overlay files.
			//Overlay: &tfbridge.OverlayInfo{},
		},
		Python: &tfbridge.PythonInfo{
			PackageName: "pulumi_lidarr",

			// List any Python dependencies and their version ranges
			Requires: map[string]string{
				"pulumi": ">=3.0.0,<4.0.0",
			},
		},
		Golang: &tfbridge.GolangInfo{
			ImportBasePath: filepath.Join(
				fmt.Sprintf("github.com/MaienM/pulumi-%[1]s/sdk/", "lidarr"),
				tfbridge.GetModuleMajorVersion(version.Version),
				"go",
				"lidarr",
			),
			GenerateResourceContainerTypes: true,
		},
		CSharp: &tfbridge.CSharpInfo{
			RootNamespace: "MaienM",

			PackageReferences: map[string]string{
				"Pulumi": "3.*",
			},
		},
		Java: &tfbridge.JavaInfo{
			BasePackage: "com.maienm",
		},
	}
}
