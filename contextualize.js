var Contextualizer = function() {

};
var mustache = require('mustache');
var fs = require('fs')

Contextualizer.prototype.contextualize = function(text, avatar, image) {

var util = require('util');
var exec = require('child_process').exec;

var htmloptions = {
    text: text,
    avatar: avatar,
    image: image
}

var context = mustache.render('<!DOCTYPE html>
<!--[if IE 8]><html class="lt-ie10 ie8" lang="en" data-scribe-reduced-action-queue="true"><![endif]-->
<!--[if IE 9]><html class="lt-ie10 ie9" lang="en" data-scribe-reduced-action-queue="true"><![endif]-->
<!--[if gt IE 9]><!--><html lang="en" data-scribe-reduced-action-queue="true"><!--<![endif]-->
  <head>
    
    
    
    
    
    
    
    <meta charset="utf-8">
      
      <noscript><meta http-equiv="refresh" content="0; URL=https://mobile.twitter.com/i/nojs_router?path=%2Fsmartling%2Fstatus%2F644626134236180480"></noscript>
    
    

    <link rel="stylesheet" href="https://abs.twimg.com/a/1442456431/css/t1/twitter_core.bundle.css">


      <title>Want to take your products global? Pay attention to cultural differences: http://bit.ly/1iSTtoz #globalmarketing</title>
    


<meta name="msapplication-TileImage" content="//abs.twimg.com/favicons/win8-tile-144.png"/>
<meta name="msapplication-TileColor" content="#00aced"/>


<link rel="mask-icon" sizes="any" href="https://abs.twimg.com/a/1442456431/img/t1/favicon.svg" color="#55acee">

  <link href="//abs.twimg.com/favicons/favicon.ico" rel="shortcut icon" type="image/x-icon">

<link rel="manifest" href="/manifest.json">


  <meta name="swift-page-name" id="swift-page-name" content="permalink">

    <link rel="canonical" href="https://twitter.com/smartling/status/644626134236180480">
  
  

      <link rel="alternate" type="application/json+oembed" href="https://api.twitter.com/1/statuses/oembed.json?id=644626134236180480" title="Smartling on Twitter: &quot;Want to take your products global? Pay attention to cultural differences: http://t.co/jiMUBiS49V #globalmarketing http://t.co/hMsJsTBrO4&quot;">
  <link rel="alternate" type="text/xml+oembed" href="https://api.twitter.com/1/statuses/oembed.xml?id=644626134236180480" title="Smartling on Twitter: &quot;Want to take your products global? Pay attention to cultural differences: http://t.co/jiMUBiS49V #globalmarketing http://t.co/hMsJsTBrO4&quot;">


  


<link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="Twitter">

          <link rel="stylesheet" href="https://abs.twimg.com/a/1442456431/css/t1/twitter_more_1.bundle.css">
      <link rel="stylesheet" href="https://abs.twimg.com/a/1442456431/css/t1/twitter_more_2.bundle.css">
      
<style id="user-style-smartling">





  a,
  a:hover,
  a:focus,
  a:active {
    color: #0084B4;
  }

  .u-textUserColor,
  .u-textUserColorHover:hover,
  .u-textUserColorHover:focus {
    color: #0084B4 !important;
  }

  .u-borderUserColor,
  .u-borderUserColorHover:hover,
  .u-borderUserColorHover:focus {
    border-color: #0084B4 !important;
  }

  .u-bgUserColor,
  .u-bgUserColorHover:hover,
  .u-bgUserColorHover:focus {
    background-color: #0084B4 !important;
  }


  .u-dropdownUserColor > li:hover,
  .u-dropdownUserColor > li:focus,
  .u-dropdownUserColor > li > button:hover,
  .u-dropdownUserColor > li > button:focus {
    color: #fff !important;
    background-color: #0084B4 !important;
  }

  .u-boxShadowInsetUserColorHover:hover,
  .u-boxShadowInsetUserColorHover:focus {
    box-shadow: inset 0 0 0 5px #0084B4 !important;
  }



  .u-textUserColorLight {
    color: #99CDE1 !important;
  }

  .u-borderUserColorLight,
  .u-borderUserColorLightFocus:focus,
  .u-borderUserColorLightHover:hover,
  .u-borderUserColorLightHover:focus {
    border-color: #99CDE1 !important;
  }

  .u-bgUserColorLight {
    background-color: #99CDE1 !important;
  }


  .u-boxShadowUserColorLighterFocus:focus {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.05), inset 0 1px 2px rgba(0,132,180,0.25) !important;
  }


  .u-textUserColorLightest {
    color: #E5F2F7 !important;
  }

  .u-borderUserColorLightest {
    border-color: #E5F2F7 !important;
  }

  .u-bgUserColorLightest {
    background-color: #E5F2F7 !important;
  }


  .u-textUserColorLighter {
    color: #BFE0EC !important;
  }

  .u-borderUserColorLighter {
    border-color: #BFE0EC !important;
  }

  .u-bgUserColorLighter {
    background-color: #BFE0EC !important;
  }


  .u-bgUserColorDarkHover:hover {
    background-color: #006990 !important;
  }

  .u-borderUserColorDark {
    border-color: #006990 !important;
  }


  .u-bgUserColorDarkerActive:active {
    background-color: #004F6C !important;
  }















a,
.btn-link,
.btn-link:focus,
.icon-btn,



.pretty-link b,
.pretty-link:hover s,
.pretty-link:hover b,
.pretty-link:focus s,
.pretty-link:focus b,
/* Account Group */
.metadata a:hover,
.metadata a:focus,

.account-group:hover .fullname,
.account-group:focus .fullname,
.account-summary:focus .fullname,

.message .message-text a,
.stats a strong,
.plain-btn:hover,
.plain-btn:focus,
.dropdown.open .user-dropdown.plain-btn,
.open > .plain-btn,
#global-actions .new:before,
.module .list-link:hover,
.module .list-link:focus,

.UserCompletion-step:hover,

.stats a:hover,
.stats a:hover strong,
.stats a:focus,
.stats a:focus strong,

.profile-modal-header .fullname a:hover,
.profile-modal-header .username a:hover,
.profile-modal-header .fullname a:focus,
.profile-modal-header .username a:focus,

.find-friends-sources li:hover .source,





.stream-item a:hover .fullname,
.stream-item a:focus .fullname,

.stream-item .view-all-supplements:hover,
.stream-item .view-all-supplements:focus,

.tweet .time a:hover,
.tweet .time a:focus,
.tweet .details.with-icn b,
.tweet .details.with-icn .Icon,
.tweet .tweet-geo-text a:hover,

.stream-item:hover .original-tweet .details b,
.stream-item .original-tweet.focus .details b,
.stream-item.open .original-tweet .details b,

.simple-tweet:hover .details b,
.simple-tweet.focus .details b,
.simple-tweet.open .details b,
.simple-tweet:hover .details .simple-details-link,
.simple-tweet.focus .details .simple-details-link,

.client-and-actions a:hover,
.client-and-actions a:focus,

.dismiss-btn:hover b,

.tweet .context .pretty-link:hover s,
.tweet .context .pretty-link:hover b,
.tweet .context .pretty-link:focus s,
.tweet .context .pretty-link:focus b,

.list .username a:hover,
.list .username a:focus,
.list-membership-container .create-a-list,
.list-membership-container .create-a-list:hover,



.card .list-details a:hover,
.card .list-details a:focus,
.card .card-body:hover .attribution,
.card .card-body .attribution:focus,
.new-tweets-bar,
.onebox .soccer ul.ticker a:hover,
.onebox .soccer ul.ticker a:focus,



.remove-background-btn,



.stream-item-activity-notification .latest-tweet .tweet-row a:hover,
.stream-item-activity-notification .latest-tweet .tweet-row a:focus,
.stream-item-activity-notification .latest-tweet .tweet-row a:hover b,
.stream-item-activity-notification .latest-tweet .tweet-row a:focus b {
    color: #0084B4;
}



    #global-actions > li > a {
      border-bottom-color: #0084B4;
    }

    #global-actions > li:hover > a,
    #global-actions > li > a:focus,
    .nav.right-actions > li > a:hover,
    .nav.right-actions > li > button:hover,
    .nav.right-actions > li > a:focus,
    .nav.right-actions > li > button:focus {
      color: #0084B4;
    }

    /* Surpress the new connect glow if in experiment. */
     #global-actions .people.new:before {
       content: none;
     }

  /* hover state for photo select button*/
  .photo-selector:hover .btn,
  .icon-btn:hover,
  .icon-btn:active,
  .icon-btn.active,
  .icon-btn.enabled {
    border-color: #0084B4;
    border-color: rgba(0,132,180,.5);
    color: #0084B4;
  }



  /* tweet-btn can have primary-btn class as well so the following rules ensure that the correct background color is applied */
  .tweet-btn,
  .tweet-btn:focus {
    background-color: #0084B4;
    background: rgba(0,132,180,.8);
  }

  .tweet-btn:hover,
  .tweet-btn:active,
  .tweet-btn.active {
    background-color: #0084B4;
  }

  .tweet-btn.btn.disabled,
  .tweet-btn.btn.disabled:hover,
  .tweet-btn.btn[disabled],
  .tweet-btn.btn[aria-disabled=true] {
    background: #0084B4;
  }

  .btn:focus,
  .btn.focus,
  .Button:focus {
    box-shadow:
      0 0 0 1px #fff,
      0 0 0 3px rgba(0, 132, 180, 0.5);
  }

  .selected-stream-item:focus {
    box-shadow: 0 0 0 3px rgba(0, 132, 180, 0.5);
  }

  /* highlighting when navigate through timeline stream table view with j & k. */
  .js-navigable-stream.stream-table-view .selected-stream-item[tabindex="-1"]:focus {
    outline: 3px solid rgba(0, 132, 180, 0.5) !important;
  }

  /* box-shadow does not work with table tr element */
  .js-navigable-stream.stream-table-view .selected-stream-item:focus {
    box-shadow: none;
  }

  /**
   * 1. Bring actionable tweet to top when active to ensure border
   *    highlighting wraps entire tweet. Value must be at least at if not
   *    higher than the z-index value of ProfileHeading to ensure first
   *    tweet in timeline receives border on all four sides.
   *    NOTE: z-index should be 2 to avoid conflicts with .ProfileCanopy and .ProfileCard-avatarLink
   */

  .js-stream-item.is-selected:focus .ProfileCard,
  .QuoteTweet:hover,
  .QuoteTweet:focus,
  .QuoteTweet:active,
  .activity-user-profile-content:hover,
  .activity-user-profile-content:focus,
  .activity-user-profile-content:active {
    border-color: rgba(0, 132, 180, 0.5);
    z-index: 2; /* 1 */
  }

  .global-dm-nav.new.with-count .dm-new {
    background: #fff;
  }

  .global-dm-nav.new.with-count .dm-new .count-inner {
    background: #0084B4;
  }

  .global-nav .people .count .count-inner {
    background: #0084B4;
  }

  .dropdown-menu li > a:hover,
  .dropdown-menu li > a:focus,
  .dropdown-menu .dropdown-link:hover,
  .dropdown-menu .dropdown-link:focus,
  .dropdown-menu .dropdown-link.is-focused,
  .dropdown-menu li:hover .dropdown-link,
  .dropdown-menu li:focus .dropdown-link,
  .dropdown-menu .typeahead-recent-search-item.selected,
  .dropdown-menu .typeahead-saved-search-item.selected,
  .dropdown-menu .selected a,
  .dropdown-menu .dropdown-link.selected {
    background-color: #0084B4 !important;
  }

/* give tweet boxes 10% of the users link color as background */
.home-tweet-box,
.RetweetDialog-commentBox,
.WebToast-box--altColor,
.content-main .conversations-enabled .expansion-container .inline-reply-tweetbox {
  background-color: #E5F2F7;
}

.conversations-enabled .inline-reply-caret .caret-inner {
  border-bottom-color: #E5F2F7;
}
.top-timeline-tweetbox .timeline-tweet-box .tweet-form.condensed .tweet-box {
  color: #0084B4;
}
/* give tweet box containers an outline using the users link color */
.home-tweet-box,
.top-timeline-tweetbox .timeline-tweet-box {
  border-color: #BFE0EC !important;
}
/* give tweet boxes an outline using the users link color */
.tweet-box[contenteditable="true"] {
  border-color: rgba(0,132,180,0.25);
}

input:focus,
textarea:focus,
div[contenteditable="true"]:focus,
div[contenteditable="true"].fake-focus {
  border-color: #66B5D2;
  box-shadow: inset 0 0 0 1px rgba(0, 132, 180, 0.7);
}

.currently-dragging.modal-enabled .modal .tweet-box,
.currently-dragging:not(.modal-enabled) .tweet-content .tweet-box,
.tweet-box[contenteditable="true"]:focus {
  border-color: #99CDE1;
  box-shadow: none;
}




s,
.pretty-link:hover s,
.pretty-link:focus s,
.stream-item-activity-notification .latest-tweet .tweet-row a:hover s,
.stream-item-activity-notification .latest-tweet .tweet-row a:focus s {
    color: #66B5D2;
}



.vellip,
.vellip:before,
.vellip:after,
.conversation-module > li:after,
.conversation-module > li:before,
.ThreadedConversation-tweet ~ .ThreadedConversation-tweet:before,
.ThreadedConversation-tweet:after,
.ThreadedConversation-viewOther:before,
.ThreadedConversation-unavailableTweet:before,
.ThreadedConversation-unavailableTweet:after {
    background-color: #66B5D2;
}




.tweet .sm-reply,
.tweet .sm-rt,
.tweet .sm-fav,
.tweet .sm-image,
.tweet .sm-video,
.tweet .sm-audio,
.tweet .sm-geo,
.tweet .sm-in,
.tweet .sm-trash,
.tweet .sm-more,
.tweet .sm-page,
.tweet .sm-embed,
.tweet .sm-summary,
.tweet .sm-chat,

.timelines-navigation .active .profile-nav-icon,
.timelines-navigation .profile-nav-icon:hover,
.timelines-navigation .profile-nav-link:focus .profile-nav-icon,

.sm-top-tweet,

.metadata a.tweet-geo-text:hover .sm-geo {
    background-color: #0084B4;
}

.enhanced-mini-profile .mini-profile .profile-summary {
  background-image: url(https://abs.twimg.com/a/1442456431/img/t1/grey_header_web.jpg);
}

.wrapper-profile .profile-card.profile-header .profile-header-inner {
  background-image: url(https://abs.twimg.com/a/1442456431/img/t1/grey_header_web.jpg);
}

  #global-tweet-dialog .modal-header {
    border-bottom: solid 1px rgba(0, 132, 180, .25);
  }

  #global-tweet-dialog .modal-tweet-form-container {
    background-color: #0084B4;
    background: rgba(0, 132, 180, .1);
  }

  .inline-reply-tweetbox {
    background-color: #E5F2F7;
  }

</style>


<style id="user-style-Kale_Bogdanovs-header-img" class="js-user-style-header-img">

    body.user-style-Kale_Bogdanovs .enhanced-mini-profile .mini-profile .profile-summary {
      background-image: url(https://abs.twimg.com/a/1442456431/img/t1/grey_header_web.jpg);
    }

    body.user-style-Kale_Bogdanovs .wrapper-profile .profile-card.profile-header .profile-header-inner {
      background-image: url(https://abs.twimg.com/a/1442456431/img/t1/grey_header_web.jpg);
    }


    body.user-style-Kale_Bogdanovs .profile-canopy .bg-img {
      background-image: url(https://abs.twimg.com/a/1442456431/img/t1/grey_header_web_retina.jpg);
    }

</style>



        <meta  property="og:type" content="article">
        <meta  property="og:url" content="https://twitter.com/smartling/status/644626134236180480">
        <meta  property="og:title" content="Smartling on Twitter">
        <meta  property="og:image" content="https://pbs.twimg.com/media/CPIsDacUwAAVZw1.png:large">
        <meta  property="og:image:user_generated" content="true">
        <meta  property="og:description" content="“Want to take your products global? Pay attention to cultural differences: http://t.co/jiMUBiS49V #globalmarketing”">
        <meta  property="og:site_name" content="Twitter">
        <meta  property="fb:app_id" content="2231777543">
  </head>
  <body class="three-col logged-in user-style-smartling" 
data-fouc-class-names="swift-loading"
 dir="ltr">
      <script id="swift_loading_indicator" nonce="EsZ+0OlYXl0UJaKxnJ/yig==">
        document.body.className=document.body.className+" "+document.body.getAttribute("data-fouc-class-names");
      </script>
    <div id="doc" class="route-permalink">
        <div class="topbar js-topbar">

    
    <div class="ProfilePage-editingOverlay"></div>


  <div class="global-nav" data-section-term="top_nav">
    <div class="global-nav-inner">
      <div class="container">
        
<h1 class="Icon Icon--bird bird-topbar-etched" style="display: inline-block; width: 24px; height: 21px;">
  <span class="visuallyhidden">Twitter</span>
</h1>

  
  <div role="navigation" style="display: inline-block;"><ul class="nav js-global-actions" id="global-actions"><li id="global-nav-home" class="home" data-global-action="home">
        <a class="js-nav js-tooltip js-dynamic-tooltip" data-placement="bottom" href="/" data-component-term="home_nav" data-nav="home">
          <span class="Icon Icon--home Icon--large"></span>
          <span class="text">Home</span>
        </a>
      </li><li class="people notifications" data-global-action="connect">
        <a class="js-nav js-tooltip js-dynamic-tooltip" data-placement="bottom" href="/i/notifications" data-component-term="connect_nav" data-nav="connect">
          <span class="Icon Icon--notifications Icon--large"></span>
          <span class="text">Notifications</span>
            <span class="count">
              <span class="count-inner">0</span>
            </span>
        </a>
      </li><li class="dm-nav">
        <a role="button" href="#" class="js-tooltip js-dynamic-tooltip global-dm-nav" data-placement="bottom">
          <span class="Icon Icon--dm Icon--large"></span>
          <span class="text">Messages</span>
          <span class="dm-new"><span class="count-inner"></span></span>
        </a>
      </li></ul>
  </div>


  <div class="pull-right" style="display: inline-block;"><div role="search">
  <form class="t1-form form-search js-search-form" action="/search" id="global-nav-search">
    <label class="visuallyhidden" for="search-query">Search query</label>
    <input class="search-input" type="text" id="search-query" placeholder="Search Twitter" name="q" autocomplete="off" spellcheck="false">
    <span class="search-icon js-search-action">
      <button type="submit" class="Icon Icon--search nav-search">
        <span class="visuallyhidden">Search Twitter</span>
      </button>
    </span>
      <div role="listbox" class="dropdown-menu typeahead">
  <div aria-hidden="true" class="dropdown-caret">
    <div class="caret-outer"></div>
    <div class="caret-inner"></div>
  </div>
  <div role="presentation" class="dropdown-inner js-typeahead-results">
      <div role="presentation" class="typeahead-recent-searches">
  <h3 id="recent-searches-heading" class="typeahead-category-title recent-searches-title">Recent searches</h3><button type="button" tabindex="-1" class="btn-link clear-recent-searches">Clear All</button>
  <ul role="presentation" class="typeahead-items recent-searches-list">
    
    <li role="presentation" class="typeahead-item typeahead-recent-search-item">
      <span class="Icon Icon--close" aria-hidden="true"><span class="visuallyhidden">Remove</span></span>
      <a role="option" aria-describedby="recent-searches-heading" class="js-nav" href="" data-search-query="" data-query-source="" data-ds="recent_search" tabindex="-1"></a>
    </li>
  </ul>
</div>

    <div role="presentation" class="typeahead-saved-searches">
  <h3 id="saved-searches-heading" class="typeahead-category-title saved-searches-title">Saved searches</h3>
  <ul role="presentation" class="typeahead-items saved-searches-list">
    
    <li role="presentation" class="typeahead-item typeahead-saved-search-item">
      <span class="Icon Icon--close" aria-hidden="true"><span class="visuallyhidden">Remove</span></span>
      <a role="option" aria-describedby="saved-searches-heading" class="js-nav" href="" data-search-query="" data-query-source="" data-ds="saved_search" tabindex="-1"></a>
    </li>
  </ul>
</div>

    <ul role="presentation" class="typeahead-items typeahead-topics">
  
  <li role="presentation" class="typeahead-item typeahead-topic-item">
    <a role="option" class="js-nav" href="" data-search-query="" data-query-source="typeahead_click" data-ds="topics" tabindex="-1">
    </a>
  </li>
</ul>


    <ul role="presentation" class="typeahead-items typeahead-accounts social-context js-typeahead-accounts">
  
  <li role="presentation" data-user-id="" data-user-screenname="" data-remote="true" data-score="" class="typeahead-item typeahead-account-item js-selectable">
    
    <a role="option" class="js-nav" data-query-source="typeahead_click" data-search-query="" data-ds="account">
      <img class="avatar size32" alt="">
      <span class="typeahead-user-item-info">
        <span class="fullname"></span>
        <span class="js-verified hidden"><span class="Icon Icon--verified Icon--small">
  <span class="u-hiddenVisually">Verified account</span>
</span></span>
        <span class="username"><s>@</s><b></b></span>
      </span>
      <span class="typeahead-social-context"></span>
    </a>
  </li>
  <li role="presentation" class="js-selectable typeahead-accounts-shortcut js-shortcut"><a role="option" class="js-nav" href="" data-search-query="" data-query-source="typeahead_click" data-shortcut="true" data-ds="account_search"></a></li>
</ul>

    <ul role="presentation" class="typeahead-items typeahead-trend-locations-list">
  
  <li role="presentation" class="typeahead-item typeahead-trend-locations-item"><a role="option" class="js-nav" href="" data-ds="trend_location" data-search-query="" tabindex="-1"></a></li>
</ul>
  </div>
</div>

  </form>
</div>
<ul class="nav right-actions"><li class="me dropdown session js-session" data-global-action="t1me" id="user-dropdown">
        <a href="/settings/account" class="btn js-tooltip settings dropdown-toggle js-dropdown-toggle" id="user-dropdown-toggle" title="Profile and settings" data-placement="bottom"><img class="avatar size32" src="https://pbs.twimg.com/profile_images/3121273932/e8e2b266438b46a7897fbb01b35f0777_normal.jpeg" alt="Profile and settings" data-user-id="17591309"></a>
        <div class="dropdown-menu">
    <div class="dropdown-caret">
      <span class="caret-outer"></span>
      <span class="caret-inner"></span>
    </div>
    <ul>
      
      <li class="current-user" data-name="profile">
        

<a href="/Kale_Bogdanovs"
   class="account-summary account-summary-small js-nav"
   data-nav="view_profile"><div class="content"><div class="account-group js-mini-current-user" data-user-id="17591309" data-screen-name="Kale_Bogdanovs"><b class="fullname">Kale Bogdanovs</b><span class="screen-name hidden" dir="ltr">@Kale_Bogdanovs</span><small class="metadata">View profile</small></div></div></a>

      </li>

      <li class="dropdown-divider"></li>
      
      <li data-name="lists"><a href="/Kale_Bogdanovs/lists" data-nav="all_lists">Lists</a></li>
      <li class="dropdown-divider"></li>

      

      
      <li><a href="//support.twitter.com" data-nav="help_center">Help</a></li>

        
        <li class="js-keyboard-shortcut-trigger" data-nav="shortcuts">
          <button type="button" class="dropdown-link">Keyboard shortcuts</button>
        </li>

      

      

      

      


      <li class="dropdown-divider"></li>

      
      <li><a href="/settings/account" data-nav="settings" class="js-nav">Settings</a></li>

      
      <li class="js-signout-button" id="signout-button" data-nav="logout">
        <button type="button" class="dropdown-link">Log out</button>
        <form class="t1-form dropdown-link-form signout-form" id="signout-form" action="/logout" method="POST">
          <input type="hidden" value="40d798b04ec21df2879bfb61bebc6dd500274ea5" name="authenticity_token" class="authenticity_token">
          <input type="hidden" name="reliability_event" class="js-reliability-event">
          <input type="hidden" name="scribe_log">
        </form>
      </li>

    </ul>
  </div>

      </li><li role="complementary" aria-labelledby="global-new-tweet-button" class="topbar-tweet-btn">
        <button id="global-new-tweet-button" type="button" class="js-global-new-tweet js-tooltip btn primary-btn tweet-btn js-dynamic-tooltip" data-placement="bottom" data-component-term="new_tweet_button">
          <span class="Icon Icon--tweet Icon--large"></span>
          <span class="text">Tweet</span>
        </button>
      </li></ul></div>


      </div>
    </div>
  </div>
</div>


        <div id="page-outer">
          <div id="page-container" class="AppContent wrapper wrapper-permalink">
              





            
      
<style id="user-style-smartling">





  a,
  a:hover,
  a:focus,
  a:active {
    color: #F26C5D;
  }

  .u-textUserColor,
  .u-textUserColorHover:hover,
  .u-textUserColorHover:focus {
    color: #F26C5D !important;
  }

  .u-borderUserColor,
  .u-borderUserColorHover:hover,
  .u-borderUserColorHover:focus {
    border-color: #F26C5D !important;
  }

  .u-bgUserColor,
  .u-bgUserColorHover:hover,
  .u-bgUserColorHover:focus {
    background-color: #F26C5D !important;
  }


  .u-dropdownUserColor > li:hover,
  .u-dropdownUserColor > li:focus,
  .u-dropdownUserColor > li > button:hover,
  .u-dropdownUserColor > li > button:focus {
    color: #fff !important;
    background-color: #F26C5D !important;
  }

  .u-boxShadowInsetUserColorHover:hover,
  .u-boxShadowInsetUserColorHover:focus {
    box-shadow: inset 0 0 0 5px #F26C5D !important;
  }



  .u-textUserColorLight {
    color: #F9C4BE !important;
  }

  .u-borderUserColorLight,
  .u-borderUserColorLightFocus:focus,
  .u-borderUserColorLightHover:hover,
  .u-borderUserColorLightHover:focus {
    border-color: #F9C4BE !important;
  }

  .u-bgUserColorLight {
    background-color: #F9C4BE !important;
  }


  .u-boxShadowUserColorLighterFocus:focus {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.05), inset 0 1px 2px rgba(242,108,93,0.25) !important;
  }


  .u-textUserColorLightest {
    color: #FDF0EE !important;
  }

  .u-borderUserColorLightest {
    border-color: #FDF0EE !important;
  }

  .u-bgUserColorLightest {
    background-color: #FDF0EE !important;
  }


  .u-textUserColorLighter {
    color: #FBDAD6 !important;
  }

  .u-borderUserColorLighter {
    border-color: #FBDAD6 !important;
  }

  .u-bgUserColorLighter {
    background-color: #FBDAD6 !important;
  }


  .u-bgUserColorDarkHover:hover {
    background-color: #C1564A !important;
  }

  .u-borderUserColorDark {
    border-color: #C1564A !important;
  }


  .u-bgUserColorDarkerActive:active {
    background-color: #914037 !important;
  }















a,
.btn-link,
.btn-link:focus,
.icon-btn,



.pretty-link b,
.pretty-link:hover s,
.pretty-link:hover b,
.pretty-link:focus s,
.pretty-link:focus b,
/* Account Group */
.metadata a:hover,
.metadata a:focus,

.account-group:hover .fullname,
.account-group:focus .fullname,
.account-summary:focus .fullname,

.message .message-text a,
.stats a strong,
.plain-btn:hover,
.plain-btn:focus,
.dropdown.open .user-dropdown.plain-btn,
.open > .plain-btn,
#global-actions .new:before,
.module .list-link:hover,
.module .list-link:focus,

.UserCompletion-step:hover,

.stats a:hover,
.stats a:hover strong,
.stats a:focus,
.stats a:focus strong,

.profile-modal-header .fullname a:hover,
.profile-modal-header .username a:hover,
.profile-modal-header .fullname a:focus,
.profile-modal-header .username a:focus,

.find-friends-sources li:hover .source,





.stream-item a:hover .fullname,
.stream-item a:focus .fullname,

.stream-item .view-all-supplements:hover,
.stream-item .view-all-supplements:focus,

.tweet .time a:hover,
.tweet .time a:focus,
.tweet .details.with-icn b,
.tweet .details.with-icn .Icon,
.tweet .tweet-geo-text a:hover,

.stream-item:hover .original-tweet .details b,
.stream-item .original-tweet.focus .details b,
.stream-item.open .original-tweet .details b,

.simple-tweet:hover .details b,
.simple-tweet.focus .details b,
.simple-tweet.open .details b,
.simple-tweet:hover .details .simple-details-link,
.simple-tweet.focus .details .simple-details-link,

.client-and-actions a:hover,
.client-and-actions a:focus,

.dismiss-btn:hover b,

.tweet .context .pretty-link:hover s,
.tweet .context .pretty-link:hover b,
.tweet .context .pretty-link:focus s,
.tweet .context .pretty-link:focus b,

.list .username a:hover,
.list .username a:focus,
.list-membership-container .create-a-list,
.list-membership-container .create-a-list:hover,



.card .list-details a:hover,
.card .list-details a:focus,
.card .card-body:hover .attribution,
.card .card-body .attribution:focus,
.new-tweets-bar,
.onebox .soccer ul.ticker a:hover,
.onebox .soccer ul.ticker a:focus,



.remove-background-btn,



.stream-item-activity-notification .latest-tweet .tweet-row a:hover,
.stream-item-activity-notification .latest-tweet .tweet-row a:focus,
.stream-item-activity-notification .latest-tweet .tweet-row a:hover b,
.stream-item-activity-notification .latest-tweet .tweet-row a:focus b {
    color: #F26C5D;
}



    #global-actions > li > a {
      border-bottom-color: #F26C5D;
    }

    #global-actions > li:hover > a,
    #global-actions > li > a:focus,
    .nav.right-actions > li > a:hover,
    .nav.right-actions > li > button:hover,
    .nav.right-actions > li > a:focus,
    .nav.right-actions > li > button:focus {
      color: #F26C5D;
    }


  /* hover state for photo select button*/
  .photo-selector:hover .btn,
  .icon-btn:hover,
  .icon-btn:active,
  .icon-btn.active,
  .icon-btn.enabled {
    border-color: #F26C5D;
    border-color: rgba(242,108,93,.5);
    color: #F26C5D;
  }



  /* tweet-btn can have primary-btn class as well so the following rules ensure that the correct background color is applied */
  .tweet-btn,
  .tweet-btn:focus {
    background-color: #F26C5D;
    background: rgba(242,108,93,.8);
  }

  .tweet-btn:hover,
  .tweet-btn:active,
  .tweet-btn.active {
    background-color: #F26C5D;
  }

  .tweet-btn.btn.disabled,
  .tweet-btn.btn.disabled:hover,
  .tweet-btn.btn[disabled],
  .tweet-btn.btn[aria-disabled=true] {
    background: #F26C5D;
  }

  .btn:focus,
  .btn.focus,
  .Button:focus {
    box-shadow:
      0 0 0 1px #fff,
      0 0 0 3px rgba(242, 108, 93, 0.5);
  }

  .selected-stream-item:focus {
    box-shadow: 0 0 0 3px rgba(242, 108, 93, 0.5);
  }

  /* highlighting when navigate through timeline stream table view with j & k. */
  .js-navigable-stream.stream-table-view .selected-stream-item[tabindex="-1"]:focus {
    outline: 3px solid rgba(242, 108, 93, 0.5) !important;
  }

  /* box-shadow does not work with table tr element */
  .js-navigable-stream.stream-table-view .selected-stream-item:focus {
    box-shadow: none;
  }

  /**
   * 1. Bring actionable tweet to top when active to ensure border
   *    highlighting wraps entire tweet. Value must be at least at if not
   *    higher than the z-index value of ProfileHeading to ensure first
   *    tweet in timeline receives border on all four sides.
   *    NOTE: z-index should be 2 to avoid conflicts with .ProfileCanopy and .ProfileCard-avatarLink
   */

  .js-stream-item.is-selected:focus .ProfileCard,
  .QuoteTweet:hover,
  .QuoteTweet:focus,
  .QuoteTweet:active,
  .activity-user-profile-content:hover,
  .activity-user-profile-content:focus,
  .activity-user-profile-content:active {
    border-color: rgba(242, 108, 93, 0.5);
    z-index: 2; /* 1 */
  }

  .global-dm-nav.new.with-count .dm-new {
    background: #fff;
  }

  .global-dm-nav.new.with-count .dm-new .count-inner {
    background: #F26C5D;
  }

  .global-nav .people .count .count-inner {
    background: #F26C5D;
  }

  .dropdown-menu li > a:hover,
  .dropdown-menu li > a:focus,
  .dropdown-menu .dropdown-link:hover,
  .dropdown-menu .dropdown-link:focus,
  .dropdown-menu .dropdown-link.is-focused,
  .dropdown-menu li:hover .dropdown-link,
  .dropdown-menu li:focus .dropdown-link,
  .dropdown-menu .typeahead-recent-search-item.selected,
  .dropdown-menu .typeahead-saved-search-item.selected,
  .dropdown-menu .selected a,
  .dropdown-menu .dropdown-link.selected {
    background-color: #F26C5D !important;
  }

/* give tweet boxes 10% of the users link color as background */
.home-tweet-box,
.RetweetDialog-commentBox,
.WebToast-box--altColor,
.content-main .conversations-enabled .expansion-container .inline-reply-tweetbox {
  background-color: #FDF0EE;
}

.conversations-enabled .inline-reply-caret .caret-inner {
  border-bottom-color: #FDF0EE;
}
.top-timeline-tweetbox .timeline-tweet-box .tweet-form.condensed .tweet-box {
  color: #F26C5D;
}
/* give tweet box containers an outline using the users link color */
.home-tweet-box,
.top-timeline-tweetbox .timeline-tweet-box {
  border-color: #FBDAD6 !important;
}
/* give tweet boxes an outline using the users link color */
.tweet-box[contenteditable="true"] {
  border-color: rgba(242,108,93,0.25);
}

input:focus,
textarea:focus,
div[contenteditable="true"]:focus,
div[contenteditable="true"].fake-focus {
  border-color: #F7A69D;
  box-shadow: inset 0 0 0 1px rgba(242, 108, 93, 0.7);
}

.currently-dragging.modal-enabled .modal .tweet-box,
.currently-dragging:not(.modal-enabled) .tweet-content .tweet-box,
.tweet-box[contenteditable="true"]:focus {
  border-color: #F9C4BE;
  box-shadow: none;
}




s,
.pretty-link:hover s,
.pretty-link:focus s,
.stream-item-activity-notification .latest-tweet .tweet-row a:hover s,
.stream-item-activity-notification .latest-tweet .tweet-row a:focus s {
    color: #F7A69D;
}



.vellip,
.vellip:before,
.vellip:after,
.conversation-module > li:after,
.conversation-module > li:before,
.ThreadedConversation-tweet ~ .ThreadedConversation-tweet:before,
.ThreadedConversation-tweet:after,
.ThreadedConversation-viewOther:before,
.ThreadedConversation-unavailableTweet:before,
.ThreadedConversation-unavailableTweet:after {
    background-color: #F7A69D;
}




.tweet .sm-reply,
.tweet .sm-rt,
.tweet .sm-fav,
.tweet .sm-image,
.tweet .sm-video,
.tweet .sm-audio,
.tweet .sm-geo,
.tweet .sm-in,
.tweet .sm-trash,
.tweet .sm-more,
.tweet .sm-page,
.tweet .sm-embed,
.tweet .sm-summary,
.tweet .sm-chat,

.timelines-navigation .active .profile-nav-icon,
.timelines-navigation .profile-nav-icon:hover,
.timelines-navigation .profile-nav-link:focus .profile-nav-icon,

.sm-top-tweet,

.metadata a.tweet-geo-text:hover .sm-geo {
    background-color: #F26C5D;
}

.enhanced-mini-profile .mini-profile .profile-summary {
  background-image: url(https://pbs.twimg.com/profile_banners/80110170/1441075773/mobile);
}

.wrapper-profile .profile-card.profile-header .profile-header-inner {
  background-image: url(https://pbs.twimg.com/profile_banners/80110170/1441075773/web);
}

  #global-tweet-dialog .modal-header {
    border-bottom: solid 1px rgba(242, 108, 93, .25);
  }

  #global-tweet-dialog .modal-tweet-form-container {
    background-color: #F26C5D;
    background: rgba(242, 108, 93, .1);
  }

  .inline-reply-tweetbox {
    background-color: #FDF0EE;
  }

</style>

  
<style id="user-style-smartling-bg-img" class="js-user-style-bg-img">
  body.user-style-smartling {
        background-image: url(https://pbs.twimg.com/profile_background_images/852506550/ebe6468d373dca0b62591515071db509.jpeg);
      background-position: left 46px;
      background-attachment: fixed;
      background-repeat: repeat;
        background-repeat: no-repeat;

      background-color: #F6F7F7;
  }
</style>


<style id="user-style-smartling-header-img" class="js-user-style-header-img">

    body.user-style-smartling .enhanced-mini-profile .mini-profile .profile-summary {
      background-image: url(https://pbs.twimg.com/profile_banners/80110170/1441075773/web);
    }

    body.user-style-smartling .wrapper-profile .profile-card.profile-header .profile-header-inner {
      background-image: url(https://pbs.twimg.com/profile_banners/80110170/1441075773/web);
    }

    .DashboardProfileCard-bg {
      background-image: url(https://pbs.twimg.com/profile_banners/80110170/1441075773/600x200);
    }

    body.user-style-smartling .profile-canopy .bg-img {
      background-image: url(https://pbs.twimg.com/profile_banners/80110170/1441075773/web_retina);
    }

</style>



<div class="permalink-container">

  <div role="main" class="permalink light-inline-actions  stream-uncapped standard-tweets ">


        
  <div class="permalink-inner permalink-tweet-container">


    <div class="tweet permalink-tweet js-actionable-user js-actionable-tweet js-original-tweet
      
 opened-tweet


 has-cards
 has-native-media

















      
      logged-in
      preexpanded" data-associated-tweet-id="644626134236180480" 
data-tweet-id="644626134236180480"

data-disclosure-type=""
data-item-id="644626134236180480"
data-permalink-path="/smartling/status/644626134236180480"


 data-screen-name="smartling" data-name="Smartling" data-user-id="80110170"


 data-has-native-media="true"
 data-has-cards="true"

  data-card-type="photo"
  
  













 data-you-follow="false"
 data-follows-you="false"
 data-you-block="false"




>

      
        <div class="content clearfix">
          <div class="permalink-header">
              

    
    <div class="follow-bar">
      <div class="user-actions btn-group not-following not-muting  " data-user-id="80110170"
    data-screen-name="smartling" data-name="Smartling" data-protected="false">



    
<div class="dropdown ">
  <button type="button" class="user-dropdown dropdown-toggle js-dropdown-toggle js-link js-tooltip btn plain-btn" title="More user actions">
    <span class="user-dropdown-icon Icon Icon--cog Icon--medium"><span class="visuallyhidden">User Actions</span></span>
  </button>
  <div class="dropdown-menu">
    <div class="dropdown-caret">
      <span class="caret-outer"></span>
      <span class="caret-inner"></span>
    </div>
    <ul>
      <li class="mention-text pretty-link not-blocked"><button type="button" class="dropdown-link">Tweet to <span class="u-dir" dir="ltr">@smartling</span></button></li>
      <li class="dm-text"><button type="button" class="dropdown-link">Send a Direct Message</button></li>
      <li class="list-text pretty-link not-blocked"><button type="button" class="dropdown-link">Add or remove from lists&hellip;</button></li>
      <li class="dropdown-divider not-blocked"></li>
        <li class="mute-user-item pretty-link"><button type="button" class="dropdown-link">Mute</button></li>
  <li class="unmute-user-item pretty-link"><button type="button" class="dropdown-link">Unmute</button></li>

        <li class="block-text pretty-link not-blocked"><button type="button" class="dropdown-link">Block</button></li>
      <li class="unblock-text pretty-link"><button type="button" class="dropdown-link">Unblock</button></li>
      <li class="report-text pretty-link"><button type="button" class="dropdown-link">Report</button></li>
      <li class="hide-suggestion-text"><button type="button" class="dropdown-link">Hide this suggestion</button></li>
      <li class="dropdown-divider is-following"></li>
      <li class="retweet-on-text"><button type="button" class="dropdown-link">Turn on Retweets</button></li>
      <li class="retweet-off-text"><button type="button" class="dropdown-link">Turn off Retweets</button></li>
      <li class="device-notifications-on-text"><button type="button" class="dropdown-link">Turn on mobile notifications</button></li>
      <li class="device-notifications-off-text"><button type="button" class="dropdown-link">Turn off mobile notifications</button></li>
      <li class="dropdown-divider is-embeddable"></li>
      <li class="embed-profile"><button type="button" class="dropdown-link">Embed this Profile</button></li>
    </ul>
  </div>
</div>


  <button class="user-actions-follow-button js-follow-btn follow-button btn" type="button">
  <span class="button-text follow-text">
     <span class="Icon Icon--follow"></span> Follow 
    
  </span>
  <span class="button-text following-text">
     Following 
    
  </span>
  <span class="button-text unfollow-text">
     Unfollow 
    
  </span>
  <span class="button-text blocked-text">Blocked</span>
  <span class="button-text unblock-text">Unblock</span>
  <span class="button-text pending-text">Pending</span>
  <span class="button-text cancel-text">Cancel</span>
</button>



</div>

    </div>


              <a  class="account-group js-account-group js-action-profile js-user-profile-link js-nav" href="/smartling" data-user-id="80110170">
    <img class="avatar js-action-profile-avatar" src="{{avatar}}" alt="">
    <strong class="fullname js-action-profile-name show-popup-with-id" data-aria-label-part>Smartling<span class="Icon Icon--verified Icon--small">
  <span class="u-hiddenVisually">Verified account</span>
</span></strong>
    <span>&rlm;</span><span class="username js-action-profile-name" data-aria-label-part><s>@</s><b>smartling</b></span>
    
  </a>

            
            <small class="time">
  <a href="/smartling/status/644626134236180480" class="tweet-timestamp js-permalink js-nav js-tooltip" title="7:37 AM - 18 Sep 2015" ><span class="_timestamp js-short-timestamp " data-aria-label-part="last" data-time="1442525821" data-time-ms="1442525821000" data-long-form="true">Sep 18</span></a>
</small>

          </div>
        </div>


      
        <p class="TweetTextSize TweetTextSize--28px js-tweet-text tweet-text" lang="en" data-aria-label-part="0" >{{text}}</a></p>
      <div class="js-tweet-details-fixer tweet-details-fixer">


                <div class="cards-media-container js-media-container"><div data-card-url="//twitter.com/smartling/status/644626134236180480/photo/1" data-card-type="photo" class="cards-base cards-multimedia" data-element-context="platform_photo_card">


  <a class="media media-thumbnail twitter-timeline-link is-preview " data-url="{{image}}:large" data-resolved-url-large="{{image}}:large" href="//twitter.com/smartling/status/644626134236180480/photo/1">
    <div class="">
        <img src="{{image}}" width="1024" height="512">
    </div>
  </a>

  <div class="cards-content">
    <div class="byline">
      
    </div>
    
  </div>
  
</div>




</div>



  <div class="js-machine-translated-tweet-container"></div>
    <div class="js-tweet-stats-container tweet-stats-container ">
    </div>

  <div class="client-and-actions">
  <span class="metadata">
    <span>7:37 AM - 18 Sep 2015</span>

    

        
        
        

  </span>
</div>


</div>

</html>
 ', htmloptions)


fs.writeFile('context.html', context);




var curlOptions = {
    filepath: 'context.html'
    apiKey: 'd39e8d85-3d7b-46f5-ad79-30edf0ccf7b3',
    projectId: 'c5c7a69ed'
}

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
var newbody = stdout

});
};
module.exports = Contextualizer;