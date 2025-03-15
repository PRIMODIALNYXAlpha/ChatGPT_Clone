"use client";
import React, { useState } from 'react'
import styles from './RightSection.module.css'
import chatgptlogo from '@/assets/chatgptlogo.png'
import chatgptlogo2 from '@/assets/chatgptlogo2.png'
import nochatlogo from '@/assets/nouserlogo.png'
import Image from 'next/image'

const geminiApiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

interface Message {
  role: string;
  content: string;
}

const RightSection = () => {
    const [messages, setMessages] = useState('')
    const [allMessages, setAllMessages] = useState<Message[]>([])
    const [isLoading, setIsLoading] = useState(false)

    const sendMessage = async() => {
      if (!messages.trim()) return;
      
      try {
        setIsLoading(true);
        // Add user message immediately
        setAllMessages(prev => [...prev, {
          role: 'user',
          content: messages
        }]);
        
        const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': 'AIzaSyBLS5704n3LyRNstYfiGu2SJ2IANIDB5LY'
          },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: messages
              }]
            }]
          })
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        // Add AI response
        if (data.candidates && data.candidates[0].content.parts[0].text) {
          setAllMessages(prev => [...prev, {
            role: 'assistant',
            content: data.candidates[0].content.parts[0].text
          }]);
        }

        setMessages('');
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    }
    
    return (
      <div className={styles.RightSection}>
        <div className={styles.ChatGPTVersion}>
          <p className={styles.text1}>ChatGPT 3.5</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>

        <div className={styles.nochat}>
          {allMessages.length > 0 ? (
            <div className={styles.messages}>
              {allMessages.map((msg, index) => (
                <div key={index} className={`${styles.message} ${msg.role === 'user' ? styles.userMessage : styles.aiMessage}`}>
                  <Image 
                    src={msg.role === 'user' ? chatgptlogo : chatgptlogo} 
                    alt={msg.role} 
                    width={30} 
                    height={30} 
                  />
                  <div className={styles.messageContent}>
                    <p>{msg.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className={styles.skeletonMessage}>
                  <Image 
                    src={chatgptlogo} 
                    alt="assistant" 
                    width={30} 
                    height={30} 
                  />
                  <div className={styles.skeletonContent}>
                    <div className={`${styles.skeleton} ${styles.skeletonLine}`}></div>
                    <div className={`${styles.skeleton} ${styles.skeletonLine}`}></div>
                    <div className={`${styles.skeleton} ${styles.skeletonLine}`}></div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <div className={styles.s1}>
                <Image src={chatgptlogo} alt='chatgpt' height={70} width={70} />
                <h1>How Can I help you today?</h1>
              </div>
              <div className={styles.s2}>
                <div className={styles.suggestioncard}>
                  <h2>Recommend activities</h2>
                  <p>psychologist recommended activities</p>
                </div>
                <div className={styles.suggestioncard}>
                  <h2>Recommend activities</h2>
                  <p>psychologist recommended activities</p>
                </div>
                <div className={styles.suggestioncard}>
                  <h2>Recommend activities</h2>
                  <p>psychologist recommended activities</p>
                </div>
                <div className={styles.suggestioncard}>
                  <h2>Recommend activities</h2>
                  <p>psychologist recommended activities</p>
                </div>
              </div>
            </>
          )}
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.messagebar}>
            <input 
              type="text" 
              placeholder='Message ChatGPT...'
              onChange={(e) => setMessages(e.target.value)}
              value={messages}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            />
            {isLoading ? (
              <div className={styles.loader}></div>
            ) : (
              <svg 
                onClick={sendMessage}
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="size-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
              </svg>
            )}
          </div>
          <p>ChatGPT can make mistakes, so please check the information you receive.</p>
        </div>
      </div>
    )
}

export default RightSection;
