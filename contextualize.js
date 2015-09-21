var Contextualizer = function() {

};
var mustache = require('mustache');
var fs = require('fs')

Contextualizer.prototype.contextualize = function(text, avatar, image) {

console.log(text);
console.log(avatar);
console.log(image);

var util = require('util');
var exec = require('child_process').exec;

var htmloptions = {
    text: text,
    avatar: avatar,
    image: image
};

var context = mustache.render('<!DOCTYPE html><html lang=en data-scribe-reduced-action-queue=true><meta charset=utf-8><noscript><meta http-equiv=refresh content="0; URL=https://mobile.twitter.com/i/nojs_router?path=%2Fsmartling%2Fstatus%2F644626134236180480"></noscript><link rel=stylesheet href=https://abs.twimg.com/a/1442456431/css/t1/twitter_core.bundle.css><title>Want to take your products global? Pay attention to cultural differences: http://bit.ly/1iSTtoz #globalmarketing</title><meta name=msapplication-TileImage content="//abs.twimg.com/favicons/win8-tile-144.png"/><meta name=msapplication-TileColor content="#00aced"/><link rel=mask-icon sizes=any href=https://abs.twimg.com/a/1442456431/img/t1/favicon.svg color=#55acee><link href=//abs.twimg.com/favicons/favicon.ico rel="shortcut icon" type=image/x-icon><link rel=manifest href=/manifest.json><meta name=swift-page-name id=swift-page-name content=permalink><link rel=canonical href=https://twitter.com/smartling/status/644626134236180480><link rel=alternate type=application/json+oembed href="https://api.twitter.com/1/statuses/oembed.json?id=644626134236180480" title="Smartling on Twitter: &quot;Want to take your products global? Pay attention to cultural differences: http://t.co/jiMUBiS49V #globalmarketing http://t.co/hMsJsTBrO4&quot;"><link rel=alternate type=text/xml+oembed href="https://api.twitter.com/1/statuses/oembed.xml?id=644626134236180480" title="Smartling on Twitter: &quot;Want to take your products global? Pay attention to cultural differences: http://t.co/jiMUBiS49V #globalmarketing http://t.co/hMsJsTBrO4&quot;"><link rel=search type=application/opensearchdescription+xml href=/opensearch.xml title=Twitter><link rel=stylesheet href=https://abs.twimg.com/a/1442456431/css/t1/twitter_more_1.bundle.css><link rel=stylesheet href=https://abs.twimg.com/a/1442456431/css/t1/twitter_more_2.bundle.css><style id=user-style-smartling><style id="user-style-Kale_Bogdanovs-header-img" class="js-user-style-header-img">body.user-style-Kale_Bogdanovs .enhanced-mini-profile .mini-profile .profile-summary{background-image:url(https://abs.twimg.com/a/1442456431/img/t1/grey_header_web.jpg)}body.user-style-Kale_Bogdanovs .wrapper-profile .profile-card.profile-header .profile-header-inner{background-image:url(https://abs.twimg.com/a/1442456431/img/t1/grey_header_web.jpg)}body.user-style-Kale_Bogdanovs .profile-canopy .bg-img{background-image:url(https://abs.twimg.com/a/1442456431/img/t1/grey_header_web_retina.jpg)}</style><meta property=og:type content=article><meta property=og:url content=https://twitter.com/smartling/status/644626134236180480><meta property=og:title content="Smartling on Twitter"><meta property=og:image content=https://pbs.twimg.com/media/CPIsDacUwAAVZw1.png:large><meta property=og:image:user_generated content=true><meta property=og:description content="“Want to take your products global? Pay attention to cultural differences: http://t.co/jiMUBiS49V #globalmarketing”"><meta property=og:site_name content=Twitter><meta property=fb:app_id content=2231777543></head><body class="three-col logged-in user-style-smartling" data-fouc-class-names=swift-loading dir=ltr><script id=swift_loading_indicator nonce="EsZ+0OlYXl0UJaKxnJ/yig==">document.body.className=document.body.className+" "+document.body.getAttribute("data-fouc-class-names");</script><div id=doc class=route-permalink><div class="topbar js-topbar"><div class=ProfilePage-editingOverlay></div><div class=global-nav data-section-term=top_nav><div class=global-nav-inner><div class=container><h1 class="Icon Icon--bird bird-topbar-etched" style=display:inline-block;width:24px;height:21px><span class=visuallyhidden>Twitter</span></h1><div role=navigation style=display:inline-block><ul class="nav js-global-actions" id=global-actions><li id=global-nav-home class=home data-global-action=home><a class="js-nav js-tooltip js-dynamic-tooltip" data-placement=bottom href=/ data-component-term=home_nav data-nav=home><span class="Icon Icon--home Icon--large"></span><span class=text>Home</span></a></li><li class="people notifications" data-global-action=connect><a class="js-nav js-tooltip js-dynamic-tooltip" data-placement=bottom href=/i/notifications data-component-term=connect_nav data-nav=connect><span class="Icon Icon--notifications Icon--large"></span><span class=text>Notifications</span><span class=count><span class=count-inner>0</span></span></a></li><li class=dm-nav><a role=button href=# class="js-tooltip js-dynamic-tooltip global-dm-nav" data-placement=bottom><span class="Icon Icon--dm Icon--large"></span><span class=text>Messages</span><span class=dm-new><span class=count-inner></span></span></a></li></ul></div><div class=pull-right style=display:inline-block><div role=search><form class="t1-form form-search js-search-form" action=/search id=global-nav-search><label class=visuallyhidden for=search-query>Search query</label><input class=search-input type=text id=search-query placeholder="Search Twitter" name=q autocomplete=off spellcheck=false><span class="search-icon js-search-action"><button type=submit class="Icon Icon--search nav-search"><span class=visuallyhidden>Search Twitter</span></button></span><div role=listbox class="dropdown-menu typeahead"><div aria-hidden=true class=dropdown-caret><div class=caret-outer></div><div class=caret-inner></div></div><div role=presentation class="dropdown-inner js-typeahead-results"><div role=presentation class=typeahead-recent-searches><h3 id=recent-searches-heading class="typeahead-category-title recent-searches-title">Recent searches</h3><button type=button tabindex=-1 class="btn-link clear-recent-searches">Clear All</button><ul role=presentation class="typeahead-items recent-searches-list"><li role=presentation class="typeahead-item typeahead-recent-search-item"><span class="Icon Icon--close" aria-hidden=true><span class=visuallyhidden>Remove</span></span><a role=option aria-describedby=recent-searches-heading class=js-nav href data-search-query data-query-source data-ds=recent_search tabindex=-1></a></li></ul></div><div role=presentation class=typeahead-saved-searches><h3 id=saved-searches-heading class="typeahead-category-title saved-searches-title">Saved searches</h3><ul role=presentation class="typeahead-items saved-searches-list"><li role=presentation class="typeahead-item typeahead-saved-search-item"><span class="Icon Icon--close" aria-hidden=true><span class=visuallyhidden>Remove</span></span><a role=option aria-describedby=saved-searches-heading class=js-nav href data-search-query data-query-source data-ds=saved_search tabindex=-1></a></li></ul></div><ul role=presentation class="typeahead-items typeahead-topics"><li role=presentation class="typeahead-item typeahead-topic-item"><a role=option class=js-nav href data-search-query data-query-source=typeahead_click data-ds=topics tabindex=-1></a></li></ul><ul role=presentation class="typeahead-items typeahead-accounts social-context js-typeahead-accounts"><li role=presentation data-user-id data-user-screenname data-remote=true data-score class="typeahead-item typeahead-account-item js-selectable"><a role=option class=js-nav data-query-source=typeahead_click data-search-query data-ds=account><img class="avatar size32" alt><span class=typeahead-user-item-info><span class=fullname></span><span class="js-verified hidden"><span class="Icon Icon--verified Icon--small"><span class=u-hiddenVisually>Verified account</span></span></span><span class=username><s>@</s><b></b></span></span><span class=typeahead-social-context></span></a></li><li role=presentation class="js-selectable typeahead-accounts-shortcut js-shortcut"><a role=option class=js-nav href data-search-query data-query-source=typeahead_click data-shortcut=true data-ds=account_search></a></li></ul><ul role=presentation class="typeahead-items typeahead-trend-locations-list"><li role=presentation class="typeahead-item typeahead-trend-locations-item"><a role=option class=js-nav href data-ds=trend_location data-search-query tabindex=-1></a></li></ul></div></div></form></div><ul class="nav right-actions"><li class="me dropdown session js-session" data-global-action=t1me id=user-dropdown><a href=/settings/account class="btn js-tooltip settings dropdown-toggle js-dropdown-toggle" id=user-dropdown-toggle title="Profile and settings" data-placement=bottom><img class="avatar size32" src=https://pbs.twimg.com/profile_images/3121273932/e8e2b266438b46a7897fbb01b35f0777_normal.jpeg alt="Profile and settings" data-user-id=17591309></a><div class=dropdown-menu><div class=dropdown-caret><span class=caret-outer></span><span class=caret-inner></span></div><ul><li class=current-user data-name=profile><a href=/Kale_Bogdanovs class="account-summary account-summary-small js-nav" data-nav=view_profile><div class=content><div class="account-group js-mini-current-user" data-user-id=17591309 data-screen-name=Kale_Bogdanovs><b class=fullname>Kale Bogdanovs</b><span class="screen-name hidden" dir=ltr>@Kale_Bogdanovs</span><small class=metadata>View profile</small></div></div></a></li><li class=dropdown-divider></li><li data-name=lists><a href=/Kale_Bogdanovs/lists data-nav=all_lists>Lists</a></li><li class=dropdown-divider></li><li><a href=//support.twitter.com data-nav=help_center>Help</a></li><li class=js-keyboard-shortcut-trigger data-nav=shortcuts><button type=button class=dropdown-link>Keyboard shortcuts</button></li><li class=dropdown-divider></li><li><a href=/settings/account data-nav=settings class=js-nav>Settings</a></li><li class=js-signout-button id=signout-button data-nav=logout><button type=button class=dropdown-link>Log out</button><form class="t1-form dropdown-link-form signout-form" id=signout-form action=/logout method=POST><input type=hidden value=40d798b04ec21df2879bfb61bebc6dd500274ea5 name=authenticity_token class=authenticity_token><input type=hidden name=reliability_event class=js-reliability-event><input type=hidden name=scribe_log></form></li></ul></div></li><li role=complementary aria-labelledby=global-new-tweet-button class=topbar-tweet-btn><button id=global-new-tweet-button type=button class="js-global-new-tweet js-tooltip btn primary-btn tweet-btn js-dynamic-tooltip" data-placement=bottom data-component-term=new_tweet_button><span class="Icon Icon--tweet Icon--large"></span><span class=text>Tweet</span></button></li></ul></div></div></div></div></div><div id=page-outer><div id=page-container class="AppContent wrapper wrapper-permalink"><style id=user-style-smartling-bg-img class=js-user-style-bg-img>body.user-style-smartling{background-image:url(https://pbs.twimg.com/profile_background_images/852506550/ebe6468d373dca0b62591515071db509.jpeg);background-position:left 46px;background-attachment:fixed;background-repeat:repeat;background-repeat:no-repeat;background-color:#f6f7f7}</style><style id=user-style-smartling-header-img class=js-user-style-header-img>body.user-style-smartling .enhanced-mini-profile .mini-profile .profile-summary{background-image:url(https://pbs.twimg.com/profile_banners/80110170/1441075773/web)}body.user-style-smartling .wrapper-profile .profile-card.profile-header .profile-header-inner{background-image:url(https://pbs.twimg.com/profile_banners/80110170/1441075773/web)}.DashboardProfileCard-bg{background-image:url(https://pbs.twimg.com/profile_banners/80110170/1441075773/600x200)}body.user-style-smartling .profile-canopy .bg-img{background-image:url(https://pbs.twimg.com/profile_banners/80110170/1441075773/web_retina)}</style><div class=permalink-container><div role=main class="permalink light-inline-actions stream-uncapped standard-tweets"><div class="permalink-inner permalink-tweet-container"><div class="tweet permalink-tweet js-actionable-user js-actionable-tweet js-original-tweet opened-tweet has-cards has-native-media logged-in preexpanded" data-associated-tweet-id=644626134236180480 data-tweet-id=644626134236180480 data-disclosure-type data-item-id=644626134236180480 data-permalink-path=/smartling/status/644626134236180480 data-screen-name=smartling data-name=Smartling data-user-id=80110170 data-has-native-media=true data-has-cards=true data-card-type=photo data-you-follow=false data-follows-you=false data-you-block=false><div class="content clearfix"><div class=permalink-header><div class=follow-bar><div class="user-actions btn-group not-following not-muting" data-user-id=80110170 data-screen-name=smartling data-name=Smartling data-protected=false><div class=dropdown><button type=button class="user-dropdown dropdown-toggle js-dropdown-toggle js-link js-tooltip btn plain-btn" title="More user actions"><span class="user-dropdown-icon Icon Icon--cog Icon--medium"><span class=visuallyhidden>User Actions</span></span></button><div class=dropdown-menu><div class=dropdown-caret><span class=caret-outer></span><span class=caret-inner></span></div><ul><li class="mention-text pretty-link not-blocked"><button type=button class=dropdown-link>Tweet to <span class=u-dir dir=ltr>@smartling</span></button></li><li class=dm-text><button type=button class=dropdown-link>Send a Direct Message</button></li><li class="list-text pretty-link not-blocked"><button type=button class=dropdown-link>Add or remove from lists&hellip;</button></li><li class="dropdown-divider not-blocked"></li><li class="mute-user-item pretty-link"><button type=button class=dropdown-link>Mute</button></li><li class="unmute-user-item pretty-link"><button type=button class=dropdown-link>Unmute</button></li><li class="block-text pretty-link not-blocked"><button type=button class=dropdown-link>Block</button></li><li class="unblock-text pretty-link"><button type=button class=dropdown-link>Unblock</button></li><li class="report-text pretty-link"><button type=button class=dropdown-link>Report</button></li><li class=hide-suggestion-text><button type=button class=dropdown-link>Hide this suggestion</button></li><li class="dropdown-divider is-following"></li><li class=retweet-on-text><button type=button class=dropdown-link>Turn on Retweets</button></li><li class=retweet-off-text><button type=button class=dropdown-link>Turn off Retweets</button></li><li class=device-notifications-on-text><button type=button class=dropdown-link>Turn on mobile notifications</button></li><li class=device-notifications-off-text><button type=button class=dropdown-link>Turn off mobile notifications</button></li><li class="dropdown-divider is-embeddable"></li><li class=embed-profile><button type=button class=dropdown-link>Embed this Profile</button></li></ul></div></div><button class="user-actions-follow-button js-follow-btn follow-button btn" type=button><span class="button-text follow-text"><span class="Icon Icon--follow"></span> Follow</span><span class="button-text following-text">Following</span><span class="button-text unfollow-text">Unfollow</span><span class="button-text blocked-text">Blocked</span><span class="button-text unblock-text">Unblock</span><span class="button-text pending-text">Pending</span><span class="button-text cancel-text">Cancel</span></button></div></div><a class="account-group js-account-group js-action-profile js-user-profile-link js-nav" href=/smartling data-user-id=80110170><img class="avatar js-action-profile-avatar" src={{avatar}} alt><strong class="fullname js-action-profile-name show-popup-with-id" data-aria-label-part>Smartling<span class="Icon Icon--verified Icon--small"><span class=u-hiddenVisually>Verified account</span></span></strong><span>&rlm;</span><span class="username js-action-profile-name" data-aria-label-part><s>@</s><b>smartling</b></span></a><small class=time><a href=/smartling/status/644626134236180480 class="tweet-timestamp js-permalink js-nav js-tooltip" title="7:37 AM - 18 Sep 2015"><span class="_timestamp js-short-timestamp" data-aria-label-part=last data-time=1442525821 data-time-ms=1442525821000 data-long-form=true>Sep 18</span></a></small></div></div><p class="TweetTextSize TweetTextSize--28px js-tweet-text tweet-text" lang=en data-aria-label-part=0>{{text}}</a></p><div class="js-tweet-details-fixer tweet-details-fixer"><div class="cards-media-container js-media-container"><div data-card-url=//twitter.com/smartling/status/644626134236180480/photo/1 data-card-type=photo class="cards-base cards-multimedia" data-element-context=platform_photo_card><a class="media media-thumbnail twitter-timeline-link is-preview" data-url={{image}}:large data-resolved-url-large={{image}}:large href=//twitter.com/smartling/status/644626134236180480/photo/1><div class><img src={{image}} width=1024 height=512></div></a><div class=cards-content><div class=byline></div></div></div></div><div class=js-machine-translated-tweet-container></div><div class="js-tweet-stats-container tweet-stats-container"></div><div class=client-and-actions><span class=metadata><span>7:37 AM - 18 Sep 2015</span></span></div></div></html>', htmloptions);

fs.writeFile('context.html', context, function(err) {
    if (err) throw err;
    console.log('success');
    var curlOptions = {
    filepath: 'context.html',
    apiKey: 'd39e8d85-3d7b-46f5-ad79-30edf0ccf7b3',
    projectId: 'c5c7a69ed'
};

var command = mustache.render('curl  --form "html={{{filepath}}}" --form apiKey={{{apiKey}}} --form projectId={{{projectId}}} --form url=/tweetcontext  "https://api.smartling.com/v1/context/html?action=upload"', curlOptions);


child = exec(command, function(error, stdout, stderr){

console.log('stdout: ' + stdout);

if(error !== null)
{
    console.log('whoops:' + error);
}
else
{
    console.log('Hooray!')
}
});

});
};
module.exports = Contextualizer;